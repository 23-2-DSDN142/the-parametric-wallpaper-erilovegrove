//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(245, 243, 230); //beige
  strokeWeight (0);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);
 
  fill(95, 153, 123); // Green
  ellipse(100, 100, 200, 200); // draws a circle

  fill(245, 243, 230); // Beige
  ellipse(200, 200, 200, 200);
  arc(0, 200, 200, 200, 270, 360); // Corrected angles in radians

  fill(237, 90, 40); // Orange
  ellipse(200, 200, 10, 10);
  ellipse(0, 200, 10, 10);
  
}
