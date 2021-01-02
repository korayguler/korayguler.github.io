$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
        
    
    //===== 
    
    new WOW().init();
    
    
    
    
    
    
});