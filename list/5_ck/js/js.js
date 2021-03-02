$(document).ready(function () {


    //notice
    $("#notice").hide();
    $("#notice").delay(1000).slideDown(1000);
    $("#notice a").click(function () {
        $("#notice").slideUp(1000);
    });

    //menu   //태그추가
    $("#menu_wrap").before("<div class='bg'></div>");

    //추가 태그, 하위메뉴
    $(".bg").hide();
    $(".submenu").hide();
    $(".menu").mouseover(function () {
        $(".bg").show();
        $(".submenu").show();
    }).mouseout(function () {
        $(".bg").hide();
        $(".submenu").hide();
    });

    $(".bg").mouseover(function () {
        $(this).show();
        $(".submenu").show();
    }).mouseout(function () {
        $(this).hide();
        $(".submenu").hide();
    });

    //추가된 태그에 이미지변경
    $(".menu1, .sub1").mouseover(function () { //이용안내
        $(".bg").css("background-image", "url(img/menu.jpg)");
    });
    $(".menu2, .sub2").mouseover(function () { //이용안내
        $(".bg").css("background-image", "url(img/menu2.jpg)");
    });
    $(".menu3, .sub3").mouseover(function () { //이용안내
        $(".bg").css("background-image", "url(img/menu3.jpg)");
    });
    $(".menu4, .sub4").mouseover(function () { //이용안내
        $(".bg").css("background-image", "url(img/menu4.jpg)");
    });
    $(".menu5, .sub5").mouseover(function () { //이용안내
        $(".bg").css("background-image", "url(img/menu5.jpg)");
    });
    $(".menu6, .sub6").mouseover(function () { //이용안내
        $(".bg").css("background-image", "url(img/menu6.jpg)");
    });


    //wrap
    var i = 0;
    var auto = setInterval(function () {
        i++;
        if (i < 2) {
            $("#p1_sl article").css({
                left: 0
            }).stop().animate({
                left: "-100%"
            });
            $("#p1_sl article").eq(i).css({
                left: "100%"
            }).stop().animate({
                left: 0
            });
            $("#btn_on p").removeClass("on");
            $("#btn_on p").eq(i).addClass("on");
        } else {
            i = 0;
            $("#p1_sl article").css({
                left: 0
            }).stop().animate({
                left: "-100%"
            });
            $("#p1_sl article").eq(i).css({
                left: "100%"
            }).stop().animate({
                left: 0
            });
            $("#btn_on p").removeClass("on");
            $("#btn_on p").eq(i).addClass("on");
        }
    }, 4000);

    //wrap

    var i = 0;
    var num = $("#photo1 figure, #photo2 figure").length;

    $(".b_right").click(function () {
        if (i < num - 3) {
            i++;
            var move = -400 * i;
            $("#photo1, #photo2").stop().animate({
                left: move
            }, 600);
        }
    });
    $(".b_left").click(function () {
        if (i > 0) {
            i--;
            var move = -400 * i;
            $("#photo1, #photo2").stop().animate({
                left: move
            }, 600);
        }
    });



    //이미지변경
    $("#photo1 figure:eq(0) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p4_1_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p4_1.png"
        });
    })
    $("#photo1 figure:eq(1) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p4_2_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p4_2.png"
        });
    })
    $("#photo1 figure:eq(2) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p4_3_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p4_3.png"
        });
    })
    $("#photo1 figure:eq(3) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p4_4_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p4_4.png"
        });
    })
    $("#photo1 figure:eq(4) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p4_5_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p4_5.png"
        });
    })
    $("#photo1 figure:eq(5) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p4_6_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p4_6.png"
        });
    })
    $("#photo1 figure:eq(6) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p4_7_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p4_7.png"
        });
    })
    $("#photo1 figure:eq(7) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p4_8_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p4_8.png"
        });
    })

    //이미지변경
    $("#photo2 figure:eq(0) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p6_1_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p6_1.png"
        });
    })
    $("#photo2 figure:eq(1) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p6_2_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p6_2.png"
        });
    })
    $("#photo2 figure:eq(2) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p6_3_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p6_3.png"
        });
    })
    $("#photo2 figure:eq(3) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p6_4_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p6_4.png"
        });
    })
    $("#photo2 figure:eq(4) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p6_5_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p6_5.png"
        });
    })
    $("#photo2 figure:eq(5) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p6_6_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p6_6.png"
        });
    })
    $("#photo2 figure:eq(6) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p6_7_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p6_7.png"
        });
    })
    $("#photo2 figure:eq(7) .m_1 img").mouseover(function () {
        $(this).attr({
            src: "img/p6_8_1.png"
        });
    }).mouseout(function () {
        $(this).attr({
            src: "img/p6_8.png"
        });
    })









});
