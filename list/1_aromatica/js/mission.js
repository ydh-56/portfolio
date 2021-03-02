$(document).ready(function(){
   
        $('.header').wrapInner("<div class='inner'></div>");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $('.header').addClass('fixed');
            $("#menu > li > a").css("color","#ffffff");
        } else {
            $('.header').removeClass('fixed');
            $("#menu > li > a").css("color","#ffffff");
        }
    });
    
});