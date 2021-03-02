function banner1(){
    $("#review").animate({
        marginLeft:parseInt($("#review").css("margin-left"))-375+"px"
    },"fast",function(){
       $("#review figure:first").appendTo("#review");
        $("#review").css("margin-left","-375px");
    });
}

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
    
    
    
    //1page
    //wrap
    var i = 0;
    var auto = setInterval(function(){
        i++;
        if(i<2){
            $(".img_wrap figure").css({left:0}).stop().animate({left:"-100%"});
            $(".img_wrap figure").eq(i).css({left:"100%"}).stop().animate({left:0});
            $("#btn_on p").removeClass("on");
            $("#btn_on p").eq(i).addClass("on");
        }else{
            i = 0;
            $(".img_wrap figure").css({left:0}).stop().animate({left:"-100%"});
            $(".img_wrap figure").eq(i).css({left:"100%"}).stop().animate({left:0});
            $("#btn_on p").removeClass("on");
            $("#btn_on p").eq(i).addClass("on");
        }
    },5000);
    
    
    //
    var width1 = 375*$("#review figure").size()+"px";
    $("#review").css("width",width1);
    $("#review figure:last").prependTo("#review");
    $("#review").css("margin-left","-375px");
    
    var banner = setInterval("banner1()",2000);
    
    $("#review figure").mouseover(function(){
        clearInterval(banner);
        $(this).find("img").css("opacity","0.5");
    }).mouseout(function(){
        banner = setInterval("banner1()",2000);
        $(this).find("img").css("opacity","1.0");
    });
    
    /*$(".img_h").click(function(){
       $(this).attr("src","img/shopping/2p_h2.png");
        
        
    }).toggle("src","img/shopping/2p_h2.png");
    */
    
  /*
    
    $(".img_h img:eq(0)").toggle(function(){
      $(this).attr("src","img/shopping/2p_h2.png");
    },function(){
       $(this).attr("src","img/shopping/2p_h1.png"); 
    });
    
    */
    
    
    
       
    //버튼 제품 정렬
     //btn
    $(".nav3 a:first").addClass("selected");
    $(".nav3 a").click(function(){
       $(".nav3 a").removeClass("selected"); 
        
       $(this).addClass("selected"); 
    });

    
    $(".nav3 a").eq(0).click(function(){//ALL
        $("#product1 figure").hide();
        $(".pro_0").show();
        
    });
    $(".nav3 a").eq(1).click(function(){//상품1
        $("#product1 figure").hide();
        $(".pro_1").show();
        
    });
    $(".nav3 a").eq(2).click(function(){//상품2
        $("#product1 figure").hide();
        $(".pro_2").show();
        
    });
    $(".nav3 a").eq(3).click(function(){//상품3
        $("#product1 figure").hide();
        $(".pro_3").show();
        
    });
    $(".nav3 a").eq(4).click(function(){//상품3
        $("#product1 figure").hide();
        $(".pro_4").show();      
    });
    $(".nav3 a").click(function(){
        return false;
    });
    
    //
    $(".view1").toggle(function(){
      $(this).attr("src","img/shopping/2p_h2.png");
    },function(){
       $(this).attr("src","img/shopping/2p_h1.png"); 
    });
    
     
       $(".view2").toggle(function(){
      $(this).attr("src","img/shopping/2p_c2.png");
    },function(){
       $(this).attr("src","img/shopping/2p_c1.png"); 
    });   
    
    
});
    