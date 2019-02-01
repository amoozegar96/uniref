$('.carousel').carousel({
    wrap: true,
    touch: true,
    keyboard: true,
    interval: 3000,
    next: false
});
$(window).scroll(function () {
    var fixmenu = $(window).scrollTop();
    if (fixmenu <= $(".bottom-header").offset().top - 20) {
        $(".header").removeClass("FixMenuLarge")
    }
    if (fixmenu >= $(".bottom-header").offset().top - 20) {
        $(".header").addClass("FixMenuLarge")
    }
});