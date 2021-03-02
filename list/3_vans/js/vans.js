$(document).ready(function () {

            //notice
    $("#notice").hide();
    $("#notice").delay(1000).slideDown(1000);
    $("#notice a").click(function(){
       $("#notice").slideUp(1000); 
    });

    $(".submenu").hide();
    $(".menu_list > li > a").on("mouseenter", function () {
        $(this).next("ul").stop().fadeIn();
    });
    $(".menu_list > li").on("mouseleave", function () {
        $(this).children("a").next("ul").stop().fadeOut();
    });



    //search_top
    var search1 = setInterval(function () {
        $(".search_top ul li:first").slideUp(function () {
            $(this).appendTo($(".search_top ul")).slideDown();
        });
    }, 2500);



    $(".p3_sl1 img").mouseover(function () {
        $(this).attr({
            src: "img/p3_7.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p3_7_1.png"
        });
    })

    $(".p3_sl2 img").mouseover(function () {
        $(this).attr({
            src: "img/p3_8.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p3_8_1.png"
        });
    })


    var show_p3 = setInterval(function () {

        $(".p3_sl").delay(1000).animate({
            marginLeft: "-750px"
        }, "fast");
        $(".p3_sl").delay(1500).animate({
            marginLeft: "-1500px"
        }, "fast");
        $(".p3_sl").delay(4000).animate({
            marginLeft: "-750px"
        }, "fast");
        $(".p3_sl").delay(4500).animate({
            marginLeft: "0px"
        }, "fast");
    }, 3000);









}); //end
