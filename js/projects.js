      // Projects dataset
      var projects = [
        [
          {
            "name": "KIM 1 emulator",
            "description": "Online emulator of famous KIM-1 single board computer based on 6502 CPU",
            "video_url": "https://www.youtube.com/watch?v=M2Lm6UH9SOE&list=PLLfIBXQeu3abGNB-GZY7rqGM5SbcKGcdW&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/KIM-1"
          },
          {
            "name": "8-bit breadboard computer",
            "description": "Ben Eater's 8-bit breadboard computer emulator",
            "video_url": "https://www.youtube.com/watch?v=NiJ-_Xt9KRo&list=PLLfIBXQeu3ab2vTdu0aFoTUojsPWFSU3p&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/msmd-linux"
          },
          {
            "name": "CMK computer",
            "description": "Arduino based emulator of the 8-bit machine with a customly designed CPU",
            "video_url": "https://www.youtube.com/watch?v=Rvx2P4ulBlA&list=PLLfIBXQeu3aaMjeyPxJzT34DAG6v1vQqq&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/cmk-computer-2"
          }
        ],
        [
          {
            "name": "BASIC Interpreter",
            "description": "BASIC programming language interpreter in Python",
            "video_url": "https://www.youtube.com/watch?v=hK2OxjhH3dw&list=PLLfIBXQeu3aaEgJeLEcVXP6TNOCifY1CM&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/BASIC"
          },
          {
            "name": "Text Editor",
            "description": "Terminal based text editor with Linux ED command set",
            "video_url": "https://www.youtube.com/watch?v=mVFXBZUBe2s&list=PLLfIBXQeu3aa0NI4RT5OuRQsLo6gtLwGN&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/ego"
          },
          {
            "name": "File Manager",
            "description": "Terminal based file manager inspired by Norton Commander",
            "video_url": "vgbg3T5VWbQ",
            "source_code": "https://github.com/maksimKorzh/fm"
          }
        ],
        [
          {
            "name": "Raycasting Engine",
            "description": "Wolfenstein 3D like environment that runs completely in web browser",
            "video_url": "https://www.youtube.com/watch?v=ssm2jMd40p4&list=PLLfIBXQeu3abu3JLlTLLSn9ctV1t2YnkW&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/wolfenstein-js"
          },
          {
            "name": "Tetris",
            "description": "Simple game of Tetris that runs completely in web browser",
            "video_url": "https://www.youtube.com/watch?v=Vl6ewtCjn20&list=PLLfIBXQeu3aZNw6GgtCAAvM09u5zTL-My&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/tetris"
          },
          {
            "name": "Sokoban",
            "description": "A game of Sokoban in 512 bytes that fits into Boot Sector",
            "video_url": "https://www.youtube.com/watch?v=6h5QM_bwBhs&list=PLLfIBXQeu3aZuUQIQeHBDr56FQ-gGQ1E2&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/boot-games/tree/main/src/sokoban"
          }
        ],
        [
          {
            "name": "Game OS",
            "description": "Real Mode x86 operating system to run Boot Sector games",
            "video_url": "https://www.youtube.com/watch?v=L5huryha7zA&list=PLLfIBXQeu3aZCod5V6FWRNkeLiFAizR3g&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/GameOS"
          },
          {
            "name": "WLAN Touchpad",
            "description": "Control your PC/Laptop using smartphone as a touchpad",
            "video_url": "https://www.youtube.com/watch?v=sk2pwRER38w&list=PLLfIBXQeu3aaExkcG0vbgUxKMagyJPUz_&pp=gAQBiAQB",
            "source_code": "https://github.com/maksimKorzh/smartphone-remote-control"
          },
          {
            "name": "Monkey See, Monkey Do LINUX",
            "description": "Custom linux distro with graphical desktop built from sources",
            "video_url": "https://www.youtube.com/watch?v=EVTw4YqPdKA&list=PLLfIBXQeu3aZuc_0xTE2dY3juntHF5xJY",
            "source_code": "https://github.com/maksimKorzh/msmd-linux"
          }
        ]
      ];

      // On page load
      $(document).ready(function() {
        // Loop over project rows
        for (let row = 0; row < projects.length; row++) {
          // Append rows
          $("#projects").append(`
            <div class="row m-0">
              <div id="row-` + (row + 1) + `-col-1" class="col-md-4 p-0 pe-1 pb-4">
                <!-- Place your | :BsCard | here... -->
              </div>
              <div id="row-` + (row + 1) + `-col-2" class="col-md-4 p-0 px-1 pb-4">
                <!-- Place your | :BsCard | here... -->
              </div>
              <div id="row-` + (row + 1) + `-col-3" class="col-md-4 p-0 ps-1 pb-4">
                <!-- Place your | :BsCard | here... -->
              </div>
            </div>
          `);
          // Append columns
          for (let col = 0; col < projects[row].length; col++) {
            $("#row-" + (row + 1) + "-col-" + (col + 1)).append(`
              <div class="card text-center">
                <div class="card-header">
                  <h5>` + projects[row][col]['name'] + `</h5>
                </div>
                <div class="card-body">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item rounded-2 w-100"
                            src="https://www.youtube.com/embed/` + projects[row][col]['video_url'] + `"
                            allowfullscreen>
                    </iframe>
                  </div> 
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
