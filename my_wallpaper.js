//your parameter variables go here!

  var eyesize = 12; //15
  var pupilsize = eyesize/1.8;
  var eyeY = 126; //90
  var eyex = 72; //70
  var neckX = 80; //80
  var backY = 120; //80
  var eyereflection = pupilsize/1.8;
  var seaweedx = 20;
  var seaweedy = 90;
  var seaweed1x = 80; //changes x position of first seaweed //20
  var seaweed1y = 40; //changes y position of first seaweed //40
  var seaweed2x = 90; //changes x position of second seaweed etc. //100
  var seaweed2y = 40; //100
  var seaweed3x = 100; //190
  var seaweed3y = 40 //60
  var necky = 20; //changes y position of the neck //30
  var nosex = 20; //changes x position of the nose //30
  var nosey = 10; //changes y position of the nose //20
  var bellyy = 40; //changes y position of the belly //50
  var buttx = 100; //100
  var buttfinx = 115; //115
  var buttfiny = 50; //20
  var topfinleftx = 30; //changes x position of the left point of the triangle //30
  var topfinrightx = 60; //changes x position of the two right points of the triangle //60
  var topfiny = 20; //changes y position of the top point of the fin //20
  var bottomfinleftx = 10; //10
  var bottomfinrightx = 50; //30
  var bottomfindowny = 90; //50
  var bottomfintopy = 20; //20
  var bubblex = 40; //40
  var bubbley = 40; //10
  var bubblesize = 70; //50
  let bubbleswitch = true; // turns bubbles on and off and heart on and off
  var heart = 40;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 180;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(59, 70, 94); //darkblue
  strokeWeight (0);

  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  DrawSeaweed (seaweedx + seaweed1x, seaweedy + seaweed1y);
  DrawSeaweed (seaweedx + seaweed2x, seaweedy + seaweed2y);
  DrawSeaweed (seaweedx + seaweed3x, seaweedy + seaweed3y);
  DrawHead (neckX, backY);
  DrawBody (neckX, backY);
  DrawButt (neckX, backY);
  DrawTail (neckX, backY);
  DrawFins (neckX, backY);
  DrawEye (eyex, eyeY);
  DrawBubbles (bubblex, bubbley, bubblesize);
  DrawBubbles (bubblex -30, bubbley + 55, bubblesize*(2/5)); 
  DrawBubbles (bubblex - 5, bubbley + 75, bubblesize*(1/5));
  
  
}

function DrawBubbles (x, y, z){

  if (bubbleswitch === true) {
    strokeWeight(3);
    stroke (111, 130, 176);
    fill (195, 233, 235);
    ellipse (x, y, z);
  }

  else {
    // Draw the heart shape
    fill(255, 0, 0); // Red color
    noStroke();

    ellipse(heart-9, heart-2, 20, 20);
    ellipse(heart + 9, heart - 2, 20, 20);
    triangle(heart + 20, heart, heart, heart + 25, heart - 20, heart);
  }
  
}

function DrawSeaweed (x, y){
  strokeWeight (10);
  stroke (105, 145, 114);
  noFill ();
  bezier(x, y, x, y-30, x + 50, y-60, x + 50, y-90);
  bezier (x, y, x, y + 30, x + 50, y + 60, x + 50, y + 90);
}

function DrawEye (x, y) {
  
  var eyecolour = color(235, 26, 7);

  if (eyesize > 20) {
    eyesize= min(20, eyesize);
    pupilsize= min(10, eyesize);
  }

  fill (255,255,255);
  strokeWeight (0.8);
  stroke (0);
  ellipse (x, y, eyesize); //fishpupil

  fill (eyecolour);
  strokeWeight (0);
  ellipse (x, y, pupilsize);//fish eye

  fill (255, 255, 255);
  strokeWeight (0);
  ellipse (x + 1.2, y - 1.2, eyereflection);
}

function DrawHead (x,y) {
  strokeWeight (0);
  fill (236, 230, 237);
  beginShape();
  vertex(x - nosex, y);
  vertex(x, y);
  vertex(x, y+ necky);
  vertex(x - nosex, y+nosey);
  endShape(CLOSE); //fishhead
}

function DrawBody (x, y) {

  fill (236, 230, 237);
  beginShape();
  vertex(x + 5, y);
  vertex(x + buttx, y);
  vertex(x + buttx, y + bellyy);
  vertex(x + 5, y + necky);
  endShape(CLOSE); //body
}

function DrawButt (x, y) {
  beginShape();
  vertex(x + buttx + 5, y);
  vertex(x + 125, y);
  vertex (x + buttx + 5, y+bellyy);
  endShape(CLOSE); //butt

}

function DrawTail (x, y) {
  triangle (x + 125, y, x + 150, y, x + 180, y - 20);//tail
  triangle (x + 125, y, x + 150, y, x + 180, y + 50); 
}

function DrawFins (x, y) {
  triangle (x + topfinleftx, y, x + topfinrightx, y-topfiny, x + topfinrightx, y); //top fin
  
  fill (225, 213, 227);
  strokeWeight (0.8);
  stroke (0);
  triangle (x + bottomfinleftx, y + bottomfintopy, x + bottomfinrightx, y + bottomfindowny, x + bottomfinrightx, y + bottomfintopy);//bottom fin

  fill (236, 230, 237);
  strokeWeight (0);
  triangle (x + buttx + 5 , y, x + buttfinx, y - buttfiny, x + buttfinx, y) //buttfin 120 used to be 115
}


