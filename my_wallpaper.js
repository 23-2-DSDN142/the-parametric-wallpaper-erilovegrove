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
  background(245, 243, 230); //beige
  strokeWeight (1);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
      beginShape();
      vertex(10, 10);
      vertex(40, 10);
      vertex(40, 40);
      vertex(10, 30);
      endShape(CLOSE); //fishhead

      ellipse (30, 20, 10);
      ellipse (30, 20, 5);//fish eye

      beginShape();
      vertex(45, 10);
      vertex(140, 10);
      vertex(140, 60);
      vertex(45, 40);
      endShape(CLOSE); //body

      beginShape();
      vertex(145, 10);
      vertex(165, 10);
      vertex(165, 35);
      vertex (145, 60);
      endShape(CLOSE); //butt

      triangle (170, 10, 190, 10, 200, 50);//tail
      triangle (170, 10, 200, 10, 220, 30); 

      triangle (70, 10, 100, 0, 100, 10); //top fin
      triangle (50, 40, 70, 60, 70, 40);//bottom fin
      triangle (145, 10, 155, 0, 155, 10) //buttfin


      
       
      

    


     

}

