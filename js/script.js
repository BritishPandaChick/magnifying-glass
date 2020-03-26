$(document).ready(function(){
    var native_width = 0;
    var native_height = 0;

    //Lets get the actual(native) dimensions of the image 
    $(".small").load(function(){
        //This will create a new image object with the same image as that in .small 
        //We cannot directly get the dimensions from .small because of the 
        //width specified to 200px in the html. To get the actual dimensions we have 
        //created this image object.
        var image_object = new Image();
        image_object.src = $(this).attr("src");

        //This code is wrapped in the .load function which is important 
        //width and height of the object would return 0 if accessed before the image gets loaded 
        native_width = image_object.width;
        native_height = image_object.height;
    });

    //Now the mousemove function 
    $(".magnify").mousemove(function(){
        //x/y coordinates of the mouse 
        //This is the position of .magnify with respect to the document 
        var magnify_offset = $(this).offset();
        //We will deduct the positions of .magnify from the mouse positions with 
        //respect to the document to get the mouse positions with respect to the  
        //container(.magnify)
        var mx = e.pageX - magnify_offset.left;
        var my = e.pageY - magnify_offset.top;

        //Finally the code to fade out the class if the mouse is outside the container 
        if(mx <= $(this).width() && my <= $(this).height() && mx >= 0 && my >= 0){
            $(".large").fadeIn(100);
        } else {
            $(".large").fadeOut(100);
        }

        if($(".large").is(":visible")){
            //The background position of .large will be changed according to the position 
            //of the mouse over the .small image. So we will get the ratio of the pixel 
            //under the mouse pointer with respect to the image and use that to position the 
            //larger image inside the magnifying glass 
            var rx = Math.round(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
            var ry = Math.round(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
            var bgp = rx + "px" + ry + "px";
            
            //Time to move the magnifying glass with the mouse 
            var px = mx - $(".large").width()/2;
            var py = my - $(".large").height()/2;
            //Now the glass moves with the mouse 
            //The logic is to deduct half of the glass's width and height from th 
            //mouse coordinates to place it with its center at the mouse coordinates 

            //If you hover on the image now, you should see the magnifying class in action 
            $(".large").css({left: px, top: py, backgroundPosition; bgp});
        }
    })
});