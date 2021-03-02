$(document).ready(function(){
   
    
         $('.header').wrapInner("<div class='inner'></div>");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            $('.header').addClass('fixed');
            $("#menu > li > a").css("color","#ffffff");
        } else {
            $('.header').removeClass('fixed');
            $("#menu > li > a").css("color","#000000");
        }
    }); 
    
    
        $("#wrap > div > a").mouseenter(function(){
        $(this).css({backgroundColor:"#333333",color:"#ffffff"});
    }).mouseleave(function(){
        $(this).css({backgroundColor:"#cccccc",color:"#666666"});
    }).click(function(){
        $(".plus").removeClass("on");
       $(this).find("span").addClass("on"); 
        $("#wrap > div > p").removeClass("on");
        $(this).siblings("p").addClass("on");
    });
     
    
    
    
    
    
    
    
   }); //end   