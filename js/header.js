// Fetch element
function renderElement(url, name) {
  $.ajax({
    url: url,
    type: "GET",
    cache: false,
    success: function(data) {
      // Render element
      $(name).append(data);

      // Highlight current tab
      if (name == "header") {
        $(".navbar-nav").children(".nav-item").each(function(index, element){
          // Get current tab name
          let currentTab = window.location.href.split(".html")[0].split("/");
          currentTab = currentTab[currentTab.length-1].toUpperCase().replace("INDEX", "HOME");

          // Get current tab link 
          let tabLink = $($(element).children()[0]);

          // Make current tab active
          if ($(element).text() == currentTab) tabLink.addClass("btn-nav-active");
        });
      }
    },
    error: function(error) { console.error(error); }
  });
}

// On document load
$(document).ready(function() {
  // Load header & footer
  renderElement('/html/header.html', 'header');
  renderElement('/html/footer.html', 'footer');
});
