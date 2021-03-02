$(document).ready(function(){
   

        //notice
    $("#notice").hide();
    $("#notice").delay(1000).slideDown(1000);
    $("#notice a").click(function(){
       $("#notice").slideUp(1000); 
    });
    
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
    
    
    
    //opacity
    setTimeout(function(){
        $(".top_img p:eq(0)").animate({"top":"500px","opacity":"1"});
    },400);
    setTimeout(function(){
        $(".top_img p:eq(1)").animate({"bottom":"50%","opacity":"1"});
    },600);
    setTimeout(function(){
        $(".top_img a").animate({"opacity":"1"});
    },800);
    
    
    
    //main
    banner1();
    function banner1(){
        $(".ba0").delay(2500).animate({left:"-1920px"});//1번이미지
        $(".ba1").delay(2500).css({"display":"block","left":"1920px"})
                 .animate({left:"0"},function(){
                 $(this).delay(2500).animate({left:"-1920px"}); //2번 이미지 
        $(".ba2").delay(2500).css({"display":"block","left":"1920px"})
                 .animate({left:"0"},function(){
                 $(this).delay(2500).animate({left:"-1920px"});  //3번 이미지
        $(".ba3").delay(2500).css({"display":"block","left":"1920px"})
                 .animate({left:"0"},function(){
                 $(this).delay(2500).animate({left:"-1920px"});  //4번 이미지    
        $(".ba0").delay(2500).css({"display":"block","left":"1920px"})
                .animate({left:"0"},banner1); //콜백함수 
        });
            });
    });
    }
    
    //page3
      var n = 1;
        
        function change(){
            $(".page3:not(:animated)").animate({"left":(n-1)*-1500});
            $("#btn_wrap button").removeClass("active");
            $(".btn"+n).addClass("active");
        }
    $(".prev").click(function(){
        n--; 
        if(n == 0){
          $(".page3").css("left",-7500);  
            n = 4;
        }
        change();
    });
    $(".next").click(function(){
        n++;
        if(n == 6){
            $(".page3").css("left",0);
            n = 2;
        }
        change();
    });
    $(".btn").click(function(){
        n = $(this).attr("data-n");
        change();
    });
    
   
    
    
    ////4page
    var visual = $(".page4 > figure"); //슬라이더 대상 이미지
    var button = $("#btn_wrap1 > li"); //controls버튼
    var current = 0;
    var setIntervalId;

    
    button.on({
    click:function(){
    var tg = $(this);
    var i = tg.index();

    button.removeClass('on');
    tg.addClass('on');

        move(i);
         return false; /*링크 걸릴때 사용*/
    }
       
    });


    $("#page4").on({
    mouseover:function(){
    clearInterval(setIntervalId);
    },

    mouseout:function(){
    timer();
    }
    });


    timer();
    function timer(){
    setIntervalId = setInterval(function(){
    var n = current + 1;
    if(n == visual.size()){
    n = 0;
    }

    button.eq(n).click();
    }, 3000);
    }


    function move(i){
    if(current == i) return;


    var currentEl = visual.eq(current);
    var nextEl = visual.eq(i);

    currentEl.css({left:0}).stop().animate({left:'-100%'});
    nextEl.css({left:'100%'}).stop().animate({left:0});

    current = i;
    } 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});//end