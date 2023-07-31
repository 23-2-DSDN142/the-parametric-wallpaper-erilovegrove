//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


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
  
      var eyesize = 20;
      var pupilsize = eyesize/2;
      var back = 40;
      var tummy = back + 50;
      var neck = back + 30;
      var nose = back + 20;
      var eyeplacement = back + 10;
      var bottomfinpoint = back + 50;
      var bottomfintop = back + 20;
      var toppoint = back - 20;
      var tailbottom = back + 50;

      fill (0);
      beginShape();
      vertex(10, back);
      vertex(40, back);
      vertex(40, neck);
      vertex(10, nose);
      endShape(CLOSE); //fishhead

      fill (255,255,255);
      ellipse (30, eyeplacement, eyesize);

      fill (66, 102, 161);
      ellipse (30, eyeplacement, pupilsize);//fish eye

      fill (0);
      beginShape();
      vertex(45, back);
      vertex(140, back);
      vertex(140, tummy);
      vertex(45, neck);
      endShape(CLOSE); //body

      beginShape();
      vertex(145, back);
      vertex(165, back);
      vertex (145, tummy);
      endShape(CLOSE); //butt

      triangle (165, back, 190, back, 220, toppoint);//tail
      triangle (165, back, 190, back, 220, tailbottom); 

      triangle (70, back, 100, toppoint, 100, back); //top fin

      fill (66, 102, 161);
      triangle (50, bottomfintop, 70, bottomfinpoint, 70, bottomfintop);//bottom fin
      
      fill (0);
      triangle (145, back, 155, toppoint, 155, back) //buttfin


      
       
      

    


     

}

