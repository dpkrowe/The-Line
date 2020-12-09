var planes_y_position = 0;

// Scrolling
$(document).scroll(function() {
    var scroll = $(window).scrollTop();
    
    // Slowly scroll planes
    $("#header-planes").css("background-position-y", (scroll / 1.65) + "px");
    planes_y_position = (scroll / 1.8);
    
    // Parrallex scrolling for the background
    $("#header-back").css("background-position-y", (scroll / 2) + "px");
});


// Move header images based on mouse position
$(document).mousemove(function(event){
    
    var window_x = window.innerWidth;
    var mouse_x = event.pageX;
    var max_move_perc = .03; // The max % that an element can be moved on the screen
    var window_center = window_x/2;
    
    // Calculate difference from center of screen
    var MovePlanes = 0;
    var MoveFront = 0;
    if(window_x > 1200){
        MovePlanes = 0 + 50 - (((window_x  / 2) + mouse_x) * max_move_perc);
        MoveFront = 0 - (175/2) - (((window_x  / 2) - mouse_x) * max_move_perc);
    }else if(window_x > 575){
        MovePlanes = 0 - 20 - ((1200 - window_x)/2) + (((window_x  / 2) + mouse_x) * max_move_perc);
        MoveFront = 0 - (175/2) - ((1200 - window_x)/2) + (((window_x  / 2) - mouse_x) * max_move_perc);
    }else{
        MovePlanes = 0 + 0 - ((575 - window_x)/2) + (((window_x  / 2) + mouse_x) * max_move_perc);
        MoveFront = 0 - (175/2) - ((575 - window_x)/2) + (((window_x  / 2) - mouse_x) * max_move_perc);
    }
    
    // Planes
    $("#header-planes").css("background-position-x", MovePlanes + "px");
    
    // Front
    $("#header-front").css("background-position-x", MoveFront + "px");
    
        
});

