$(window).scroll(function(){
    if ($(window).scrollTop() > 0) {
       $("#headerBar").addClass("fixed");
       $("main").css("margin-top", "89px");
    }
    else {
       $("#headerBar").removeClass("fixed");
       $("main").css("margin-top", "0");
    }
});

$(window).scroll(function() {
  console.log($(window).scrollTop());
})
