// Projects dataset
var projects = [
  [
    {
      "name": "Project 1",
      "description": "This is project 1 description, this is the second line",
      "video_url": "https://www.youtube.com/watch?v=hK2OxjhH3dw&list=PLLfIBXQeu3aaEgJeLEcVXP6TNOCifY1CM&pp=gAQBiAQB",
      "source_code": "https://github.com/userName/project1"
    },
    {
      "name": "Project 6",
      "description": "This is project 6 description, this is the second line",
      "video_url": "",
      "source_code": "https://github.com/userName/project6"
    },
    {
      "name": "Project 3",
      "description": "This is project 3 description, this is the second line",
      "video_url": "",
      "source_code": "https://github.com/userName/project3"
    }
  ],
  [
    {
      "name": "Project 4",
      "description": "This is project 4 description, this is the second line",
      "video_url": "",
      "source_code": "https://github.com/userName/project4"
    },
    {
      "name": "Project 5",
      "description": "This is project 5 description, this is the second line",
      "video_url": "",
      "source_code": "https://github.com/userName/project5"
    },
    {
      "name": "Project 2",
      "description": "This is project 2 description, this is the second line",
      "video_url": "eH8_bLXdfz0",
      "source_code": "https://github.com/userName/project2"
    }
  ],
  [
    {
      "name": "Project 7",
      "description": "This is project 7 description, this is the second line",
      "video_url": "",
      "source_code": "https://github.com/userName/project4"
    },
    {
      "name": "Project 8",
      "description": "This is project 8 description, this is the second line",
      "video_url": "",
      "source_code": "https://github.com/userName/project5"
    },
  ]
];

// On document load
$(document).ready(function() {
  // Append row
  for (let row = 0; row < projects.length; row++) {
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
    for (let col = 0; col < projects[row].length; col++) {
      $("#row-" + (row + 1) + "-col-" + (col + 1)).append(`
        <div class="card text-center">
          <div class="card-header">
            <h5>` + projects[row][col]['name'] + `</h5>
          </div>
          <div class="card-body">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item rounded-2 w-100"
              src="https://www.youtube.com/embed/` + projects[row][col]['video_url'] + `" allowfullscreen></iframe>
            </div> 
            <!-- Place your | :BsYouTubeVideo | here... -->
            <div class="card-text">
              ` + projects[row][col]['description'] + `
            </div>
          </div>
          <div class="card-footer">
            <small><a target="_blank" href="` + projects[row][col]['source_code'] + `">Source Code</a></small>
          </div>
        </div>
      `);
    }
  }
});
