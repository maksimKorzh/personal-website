// On page load
$(document).ready(function() {
  // Fetch projects
  $.ajax({
    url: "/json/projects.json",
    type: "GET",
    cache: false,
    success: function(data) {
      // Append row
      for (let row = 0; row < data.length; row++) {
        $("#projects").append(`
          <div class="row m-0">
            <div id="row-` + (row + 1) + `-col-1" class="col-md-4 p-0 pe-1 pb-2">
              <!-- Place your | :BsCard | here... -->
            </div>
            <div id="row-` + (row + 1) + `-col-2" class="col-md-4 p-0 px-1 pb-2">
              <!-- Place your | :BsCard | here... -->
            </div>
            <div id="row-` + (row + 1) + `-col-3" class="col-md-4 p-0 ps-1 pb-2">
              <!-- Place your | :BsCard | here... -->
            </div>
          </div>
        `);
        // Append column
        for (let col = 0; col < data[row].length; col++) {
          $("#row-" + (row + 1) + "-col-" + (col + 1)).append(`
            <div class="card text-center">
              <div class="card-header">
                <h5>` + data[row][col]['name'] + `</h5>
              </div>
              <div class="card-body">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item rounded-2 w-100"
                  src="https://www.youtube.com/embed/` + data[row][col]['video_url'] + `" allowfullscreen></iframe>
                </div> 
                <!-- Place your | :BsYouTubeVideo | here... -->
                <div class="card-text">
                  ` + data[row][col]['description'] + `
                </div>
              </div>
              <div class="card-footer">
                <small><a target="_blank" href="` + data[row][col]['source_code'] + `">Source Code</a></small>
              </div>
            </div>
          `);
        }
      }
    },
    error: function(error) { console.error(error); }
  });
});
