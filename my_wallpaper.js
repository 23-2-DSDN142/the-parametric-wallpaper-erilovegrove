//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(245, 243, 230); //beige
  //drawFish(100, 100, 50);
}

function drawFish () { //(x, y, size)  { // do not rename this function. Treat this similarly to a Draw function
  
    // Body
    //line(x - size / 2, y, x + size / 2, y);
    // Tail
    //line(x + size / 2, y, x + size, y - size / 2);
    //line(x + size / 2, y, x + size, y + size / 2);
    // Eye
    //ellipse(x - size / 4, y, size / 8);

  
}
