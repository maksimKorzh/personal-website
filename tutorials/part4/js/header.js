$(document).ready(function() {
  // Render element
  function renderElement(url, name) {
    // Fetch element
    $.ajax({
      url: url,
      type: "GET",
      cache: false,
      success: function(data) {
        // Render element
        $(name).append(data);

        // Loop over navigation links
        if (name == "header") {
          $(".navbar-nav").children(".nav-item").each(function (index, element) {
            // Ger current page
            let currentPage = window.location.href.split(".html")[0].split("/");
            currentPage = currentPage[currentPage.length-1].toUpperCase().replace("INDEX", "HOME");

            // Get current tab element
            let currentTab = $(element).children()[0];

            // Highlighr current tab
            if ($(element).text() == currentPage)
              $(currentTab).addClass("btn-nav-active");
          });
        }
      },
      error: function(error) { console.error(error); }
    });
  }

  // Render header & footer
  renderElement("/html/header.html", "header");
  renderElement("/html/footer.html", "footer");
});
