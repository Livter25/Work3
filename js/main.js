$(document).ready(function () {
    var scrolled;

    window.onscroll = function() {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if(scrolled > 0){
            $(".header").css({"display": "none"})
        }
        if(700 > scrolled){
            $(".header").css({"display": "block"})         
        }

    };
          
});