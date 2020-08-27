
/*
Author: Anthony Healy
This Application is gonna be 
*/


/*
Equations:
    Pixel Array
    [R,G,B,A,R,G,B,A,....] length=n*4

    find index in the pixel array

    (x+y*width)*4

*/
var video;
function setup() {
 
    pixelDensity(1);

    //get the video
    video=createCapture(VIDEO);
    video.size(320,240);
    video.hide();

    createCanvas(320,240);
    pixelDensity(1);
}

function draw(){
    background(51);
    //Loading Canvas Pixels
    loadPixels();

    //Loading video pixels
    video.loadPixels();

    for(var y=0; y<height; y++){
        for(var x=0;x<width; x++){

            //index
            var index=(x+y*width)*4;

            //Colors
            var R =video.pixels[index];
            var G =video.pixels[index+1];
            var B =video.pixels[index+2];
            var A =video.pixels[index+3];

            //Assigning the Colors To Canvas
            pixels[index]=R;
            pixels[index+1]=G;
            pixels[index+2]=B;
            pixels[index+3]=A;
        }
    }

    updatePixels();

}