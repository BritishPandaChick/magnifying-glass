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
        var mouse_x = e.pageX - magnify_offset.left;
        var mouse_y = e.pageY - magnify_offset.left;

        //The background position of .large will be changed according to the position 
        //of the mouse over the .small image. So we will get the ratio of the pixel 
        //under the mouse pointer with respect to the image and use that to position the 
        //larger image inside the magnifying glass 
        var ratio_x = mouse_x/$(".small").width();
        //Corresponding pixel on the large image 
        var large_ratio_x = ratio_x*native_width;
        //Centering the background inside the glass 
        large_x = large_x - $(".large").width()/2;
        //Because the background position will be specified in pixels, we need to 
        //turn it negative to make it work 
        large_x = large_x * -1;
        //Lets combine the entire calculation now 
    })
});