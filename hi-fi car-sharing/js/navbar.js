$(function() {
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if(scroll > 300) {
            $(".transparent").addClass("not-transparent");
        } else {
            $(".transparent").removeClass("not-transparent");
        }
    });
});