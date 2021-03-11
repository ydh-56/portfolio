$(document).ready(function(){
   //1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});

    
    //햄버거버튼
$(function(){
    $('header .menuopen').on('click', function(){
        $('header .menuwrap').addClass('on');
    });
    $('.menuwrap .close').on('click', function(){
        $('.menuwrap').removeClass('on');
    });
});

  // 햄버거 닫기	
    $(function(){	
    $('.menuwrap_left .tit li').on('click', function(){	
        $('.menuwrap').removeClass('on');	
    });	
});

window.onload = function () {
    var elm = ".box_page";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().top;
                    } catch (e) {}
                }
                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().top;
                    } catch (e) {}
                }
            }
            $(function(){
                wow = new WOW(
                    {
                    boxClass:     'wow',      // default
                    animateClass: 'animated', // default
                    offset:       0,          // default
                    mobile:       true,       // default
                    live:         true        // default
                  }
                  )
                  wow.init();
            });

            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 500,
                complete: function () {}
            });
            
        });
    });
    
}



//탭메뉴
$(function () {
    $('#myself .page2 .myinfo .tab li').on('click', function () {
        var num = $('#myself .page2 .myinfo .tab li').index($(this));
        $('#myself .page2 .myinfo .tabBox').removeClass('on');
        $('#myself .page2 .myinfo .tabBox:eq(' + num + ')').addClass('on')
    });
});

   $(function(){	
   $('#mypo1 .page4 .page4_box .tab4 li').on('click', function(){	
     var num = $('#mypo1 .page4 .page4_box .tab4 li').index($(this));  	
       $('#mypo1 .page4 .page4_box  .tabbox4').removeClass('on');	
       $('#mypo1 .page4 .page4_box  .tabbox4:eq('+num+')').addClass('on')	
   });	
});

// 모달팝업
$('a[href="#ex3"]').click(function (event) {
    event.preventDefault();

    $(this).modal({
        fadeDuration: 250
    });
});

$('#ex6-1b').modal({
    closeExisting: true
});

// 메일 보내기 'service_54gp0dr', 'template_jmuwthv'


        document.getElementById('form_txt').addEventListener('submit', function (event) {
            event.preventDefault();
            this.contact_number.value = Math.random() * 100000 | 0; // 서비스 id, 이메일 템플릿 
            emailjs.sendForm('service_54gp0dr', 'template_jmuwthv', this)
               .then(function() {
                        console.log('SUCCESS!');
                        alert("메일 전송 완료!");
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
        });

 
});