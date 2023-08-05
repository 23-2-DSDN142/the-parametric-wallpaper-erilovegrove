//your parameter variables go here!

  var eyesize = 15;
  var pupilsize = eyesize/2;
  var eyeY = 90;
  var neckX = 80;
  var backY = 80;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(215, 227, 245); //lightblue
  strokeWeight (0);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  
  DrawHead (neckX, backY);
  DrawBody (neckX, backY);
  DrawButt (neckX, backY);
  DrawTail (neckX, backY);
  DrawFins (neckX, backY);
  DrawEye (70, eyeY);
  
}

function DrawEye (x, y) {
  
  fill (255,255,255);
  ellipse (x, y, eyesize); //fishpupil

  fill (66, 102, 161);
  ellipse (x, y, pupilsize);//fish eye
}

function DrawHead (x,y) {
  fill (0);
  beginShape();
  vertex(x - 30, y);
  vertex(x, y);
  vertex(x, y+30);
  vertex(x - 30, y+20);
  endShape(CLOSE); //fishhead
}

function DrawBody (x, y) {

  fill (0);
  beginShape();
  vertex(x + 5, y);
  vertex(x + 100, y);
  vertex(x + 100, y + 50);
  vertex(x + 5, y + 30);
  endShape(CLOSE); //body
}

function DrawButt (x, y) {
  beginShape();
  vertex(x + 105, y);
  vertex(x + 125, y);
  vertex (x + 105, y+50);
  endShape(CLOSE); //butt

}

function DrawTail (x, y) {
  triangle (x + 125, y, x + 150, y, x + 180, y - 20);//tail
  triangle (x + 125, y, x + 150, y, x + 180, y + 50); 
}

function DrawFins (x, y) {
  triangle (x + 30, y, x + 60, y-20, x + 60, y); //top fin
  
  fill (66, 102, 161);
  triangle (x + 10, y + 20, x + 30, y + 50, x + 30, y + 20);//bottom fin

  fill (0);
  triangle (x + 105, y, x + 115, y - 20, x + 115, y) //buttfin
}


