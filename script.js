//images
var images = [];
images[0] = 'images/image1.jpg';
images[1] = 'images/image2.jpg';
images[2] = 'images/image3.jpg';
images[3] = 'images/image4.jpg';
images[4] = 'images/image5.jpg';

//imageCounter
var imageNumber = 0;

//functionf for slideshow
function imageChange()
{
  document.slide.src = images[imageNumber];

  if(imageNumber<images.length-1)
  {
    imageNumber++;
  }
  else{
    imageNumber = 0;
  }
  setTimeout(imageChange,3000);
}


function image1(){
  imageNumber = 0;
}
function image2(){
  imageNumber = 1;
}
function image3(){
  imageNumber = 2;
}
function image4(){
  imageNumber = 3;
}
function image5(){
  imageNumber = 4;
}


//when window loads
window.onload = imageChange;
