// On page load
$(document).ready(function() {
  // Render element
  function renderElement(url, name) {
    // Fetch element
    $.ajax({
      url: url,
      type: "GET",
      cache: false,
      success: function(html) {
        // Append navbar to header
        $(name).append(html);

        // If rendering header
        if (name == "header") {
          // Extract current page
          let currentPage = window.location.href.split(".html")[0].split("/");
          currentPage = currentPage[currentPage.length-1].toUpperCase().replace("INDEX", "HOME");

          // Loop over navigation links
          $(".navbar-nav").children(".nav-item").each(function (index, element) {
            // Highlight active tab
            if ($(element).text() == currentPage)
              $($(element).children()[0]).addClass("btn-nav-active");
          });
        }
      },
      error: function(error) { console.error(error); }
    });
  }
  // Render header & footer
  renderElement("/html/header.html", "header")
  renderElement("/html/footer.html", "footer")
});
