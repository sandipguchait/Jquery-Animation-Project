$(function() {
    $(".lightbox").delay(500).fadeIn(1000).slideUp(5000);
   $(".red-box").fadeOut(7000);
   $(".green-box").fadeOut(7000);
   $(".yellow-box").fadeOut(7000);
   $(".brown-box").fadeOut(7000);
   $(".blue-box").fadeOut(7000);
   $(".black-box").fadeOut(7000);
   $(".orange-box").fadeOut(7000);


   $(".red-box").fadeIn(3000);
   $(".blue-box").fadeIn(3000);
   $(".green-box").fadeIn(3000);
   $(".yellow-box").fadeIn(3000);
   $(".brown-box").fadeIn(3000);
   $(".black-box").fadeIn(3000);
   $(".orange-box").fadeIn(3000);


   $(".red-box").hide(3000);
   $(".red-box").show(3000);
   $(".green-box").hide(3000);
   $(".green-box").show(3000);
   $(".yellow-box").hide(3000);
   $(".yellow-box").show(3000);
   $(".brown-box").hide(3000);
   $(".brown-box").show(3000);
   $(".blue-box").hide(3000);
   $(".blue-box").show(3000);
   $(".black-box").hide(3000);
   $(".black-box").show(3000);
   $(".orange-box").hide(3000);
   $(".orange-box").show(3000);

   
   $(".red-box").slideUp(1000);
   $(".red-box").slideDown(1000);
   $(".green-box").slideUp(2000);
   $(".green-box").slideDown(2000);
   $(".yellow-box").slideUp(1000);
   $(".yellow-box").slideDown(1000);
   $(".brown-box").slideUp(2000);
   $(".brown-box").slideDown(2000);
   $(".blue-box").slideUp(1000);
   $(".blue-box").slideDown(1000);
   $(".black-box").slideUp(2000);
   $(".black-box").slideDown(2000);
   $(".orange-box").slideUp(1000);
   $(".orange-box").slideDown(1000);
    
    $("p").hide();
    $("p").slideDown(1000);

    //custom Animations

    $(".orange-box").animate({
        "margin-left": "+=50px",
        "opacity": "0",
        "height": "50px",
        "width":"50px",
        "margin-top": "25px"
    },1000);

    $(".brown-box").animate({
        "margin-left":"+=50px",
        "opacity": "0",
        "height": "50px",
        "width":"50px",
        "margin-top": "25px"
    },1500);

    $(".black-box").animate({
        "margin-left":"+=50px",
        "opacity": "0",
        "height": "50px",
        "width":"50px",
        "margin-top": "25px"
    },2000);

    $(".yellow-box").animate({
        "margin-left":"+=50px",
        
    },1000);

    $(".blue-box").animate({
        "margin-left":"+=50px",
    },1000);

    $(".green-box").animate({
        "margin-left":"+=50px"
    },1000);

    $("p").animate({
        "font-size": "25px"
    },1000);


     // USING DOM ELEMENTS OPERATIONS

    $("<h4> Hello My Name is Sandip and this is my Mini-JQUERY Project</h4>").prependTo("#content");

})