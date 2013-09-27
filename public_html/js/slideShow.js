var image1 = new Image();
image1.src="images/t_1.jpg";
var image2 = new Image();
image2.src="images/t_2.jpg";
var image3 = new Image();
image3.src="images/t_3.jpg";

var step = 1;
function slideImg(){
    if ( !document.images ) return;

    document.images.slider.src=eval("image" + step + ".src");
    if (step < 3 ) {
        step++;
    } else {
        step = 1;
        setTimeout("slideImg()", 2500);
    }
    
}

slideImg();
