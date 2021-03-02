$(document).ready(function(){
   

    
    //menu_wrap 전체메뉴 show/hide
    $(".all_menu img").click(function(){
       $(".menu_wrap").animate({left:"0"},"fast"); 
    });
    $(".close_btn").click(function(){
       $(".menu_wrap").animate({left:"-50%"},"fast");  
    });
    
    //mobile_menu
    $(".menu_wrap > ul > li > ul").hide(); //첫번째 .submenu만 제외하고 나머지 숨김
    $(".menu_wrap > ul > li > a:eq(1)").addClass("sel1"); 
    $(".menu_wrap > ul > li > a").click(function(){
        $(".menu_wrap").removeClass("sel1");
        $(this).addClass("sel1"); 
        $(this).siblings().slideDown();
        $(this).parent().siblings().children(".submenu1").slideUp();
        return false;
    });
    
       //하위 메뉴 보이기/숨기기
    $(".submenu").hide();
    $("#main_menu > ul > li").hover(function(){
       $(this).children("ul").show(); 
        $(".n_bg").show();
    },function(){
       $(this).children("ul").hide();  
        $(".n_bg").hide();
    });
    $(".me3, .me5").hover(function(){
       $(this).children("ul").hide();
        $(".n_bg").hide();
    });
    $("#top").before("<p class='n_bg'></p>")
    
    //추가된 태그 숨기기 .
    $(".n_bg").hide();
    
    
    //m_main_menu
    $("#m_main_menu > ul > li > a").click(function(){
        $("#m_main_menu > ul > li > a").removeClass("sel2");
        $(this).addClass("sel2");
        return false;
    });
    
    //하트, 장바구니
    $(".view1").toggle(function(){
      $(this).attr("src","img/2p_icon1_1.png");
    },function(){
       $(this).attr("src","img/2p_icon1.png"); 
       
    });
    $(".view2").toggle(function(){
      $(this).attr("src","img/2p_icon2_1.png");
    },function(){
       $(this).attr("src","img/2p_icon2.png"); 
    });
    
    
    //lip color
        $(".list3_2 p img").mouseover(function(){
           $(this).attr({src:"img/4p_1.png"});
    }).mouseout(function(){
            $(this).attr({src:"img/4p_lip2.png"});
    })
        $(".list3_3 p img").mouseover(function(){
           $(this).attr({src:"img/4p_2.png"});
    }).mouseout(function(){
            $(this).attr({src:"img/4p_lip3.png"});
    })
        $(".list3_4 p img").mouseover(function(){
           $(this).attr({src:"img/4p_3.png"});
    }).mouseout(function(){
            $(this).attr({src:"img/4p_lip4.png"});
    })
        $(".list3_5 p img").mouseover(function(){
           $(this).attr({src:"img/4p_4.png"});
    }).mouseout(function(){
            $(this).attr({src:"img/4p_lip5.png"});
    })
        $(".list3_6 p img").mouseover(function(){
           $(this).attr({src:"img/4p_5.png"});
    }).mouseout(function(){
            $(this).attr({src:"img/4p_lip6.png"});
    })
        $(".list3_7 p img").mouseover(function(){
           $(this).attr({src:"img/4p_6.png"});
    }).mouseout(function(){
            $(this).attr({src:"img/4p_lip7.png"});
    })
        $(".list3_8 p img").mouseover(function(){
           $(this).attr({src:"img/4p_7.png"});
    }).mouseout(function(){
            $(this).attr({src:"img/4p_lip8.png"});
    })
    
    
    //page3 이미지 자동 변경
    var ex2 = setInterval(function(){
    $(".p2_i2 img").first().appendTo(".p2_i2");  
    },2000);
    var ex2 = setInterval(function(){
    $(".p2_i4 img").first().appendTo(".p2_i4");  
    },3000);
    var ex2 = setInterval(function(){
    $(".p2_i5 img").first().appendTo(".p2_i5");  
    },2500);
    
    
    //fooger이미지 변경
        $(".over_f").hover(function(){
       var img_roll5 = $(this).attr("href");
        $(".normal_f",this).attr("src",img_roll5);
    },function(){
        $(".normal_f:eq(0)").attr("src","img/sns1.png");
        $(".normal_f:eq(1)").attr("src","img/sns2.png");
        $(".normal_f:eq(2)").attr("src","img/sns3.png");
        $(".normal_f:eq(3)").attr("src","img/sns4.png");
        $(".normal_f:eq(4)").attr("src","img/sns5.png");
        $(".normal_f:eq(5)").attr("src","img/sns6_1.png");
    }).click(function(){
       return false; 
    });
});