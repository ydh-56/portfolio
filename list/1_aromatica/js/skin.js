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
    
    
    $(".page2_1 img").mouseover(function(){
           $(this).attr({src:"img/skin/2p_best1_1.jpg"});
    }).mouseout(function(){
            $(this).attr({src:"img/skin/2p_best1.png"});
    })
    
    $(".page2_2 img").mouseover(function(){
           $(this).attr({src:"img/skin/2p_best2_1.jpg"});
    }).mouseout(function(){
            $(this).attr({src:"img/skin/2p_best2.png"});
    })
    
    $(".page2_3 img").mouseover(function(){
           $(this).attr({src:"img/skin/2p_best3_1.jpg"});
    }).mouseout(function(){
            $(this).attr({src:"img/skin/2p_best3.png"});
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    //btn
    
    $(".nav3 a:first").addClass("selected");
    $(".nav3 a").click(function(){
       $(".nav3 a").removeClass("selected"); 
        
       $(this).addClass("selected"); 
    });
    
     /*$(".btn3_1").click(function(){//실행1
        $("#ex3_i ul li img").toggle(200, "easeOutBounce");
    });*/
    
    $(".nav3 a").eq(0).click(function(){//ALL
        $("#product figure").show();
        
    });
    $(".nav3 a").eq(1).click(function(){//상품1
        $("#product figure").hide();
        $(".pro1").show();
        
    });
    $(".nav3 a").eq(2).click(function(){//상품2
        $("#product figure").hide();
        $(".pro2").show();
       
    });
    $(".nav3 a").eq(3).click(function(){//상품3
        $("#product figure").hide();
        $(".pro3").show();
        
    });
    $(".nav3 a").eq(4).click(function(){//상품3
        $("#product figure").hide();
        $(".pro4").show();
        
        
    });
    
    $(".nav3 a").click(function(){
    return false;
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    });//end