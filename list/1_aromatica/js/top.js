$(document).ready(function(){

     
    
    
    //메뉴
    $(".submenu1").hide();
    $("#menu > li > a").on("mouseenter",function(){
       $(this).next("ul").stop().fadeIn(); 
    });
    $("#menu > li").on("mouseleave",function(){
       $(this).children("a").next("ul").stop().fadeOut(); 
    });
    
    
    $(".submenu2").hide();
    $(".submenu1 > li > a").on("mouseenter",function(){
       $(this).next("ul").stop().fadeIn(); 
    });
    $(".submenu1 > li").on("mouseleave",function(){
       $(this).children("a").next("ul").stop().fadeOut(); 
    });
    
    $("#top_scroll").click(function(){
       $("html, body").stop().animate({scrollTop:0},500,"linear"); 
    });
    
    
    
    
    
});