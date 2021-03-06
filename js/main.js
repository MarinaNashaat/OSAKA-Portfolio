$(document).ready(function () {

    let aboutOffset = $("#about-me").offset().top;

    /* navbar & toTopBtn on scroll */
    $(window).scroll(function () {

        let windowScroll = $(window).scrollTop()
        if (windowScroll > (aboutOffset - 150)) {
            $("#main-nav").css("background-color", "rgba(0,0,0,0.97)");
            $("#btnUp").fadeIn(2000)
        }
        else {
            $("#main-nav").css("background-color", "transparent");
            $("#btnUp").fadeOut(2000)
        }

        $(".nav-item > a[href^='#']").each(function () {
            let navLinkAttr = $(this).attr("href");
            let offsetOfSec = $(navLinkAttr).offset().top;
            let sectionHeight = $(navLinkAttr).outerHeight();
            let OverAllOffset = offsetOfSec + sectionHeight;
            // if (windowScroll < OverAllOffset && windowScroll >= offsetOfSec) {
            if (windowScroll >= offsetOfSec && windowScroll < OverAllOffset) {
                $(this).addClass('active');

            }
            else {
                $(this).removeClass('active');

            }
        })
    });
    /* click mouse section to scroll down */
    $("#mouseScroll").click(function () {
        $("body,html").animate({ scrollTop: aboutOffset }, 2000)
    })
    /* click to top btn to scroll top */
    $("#btnUp").click(function () {
        $("body,html").animate({ scrollTop: "0" }, 2000)
    });
    /* smooth scroll  */
    $(".nav-item > a[href^='#']").click(function () {
        let navLinkHref = $(this).attr("href");
        let sectionOffset = $(navLinkHref).offset().top;
        $("body,html").animate({ scrollTop: sectionOffset }, { queue: false, duration: 2000 })
        $(this).addClass('active');
        $(this).parent().siblings().find('.nav-link').removeClass('active')
    })

    /* loader page */
    $(".spinner").fadeOut(2000, function () {
        $("body").css("overflow-y", "auto")
        $("#loader").slideUp(1000);
    })

    /* counter section */
    $(".counter-num").counterUp({
        delay: 5,
        time: 2000
    });
    /* blog carousel slider */
    $(".owl-carousel").owlCarousel(
        {
            autoplay: true,
            loop: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }

            }
        }
    );
    /* portfolio filter */
    $(".portfolio-container").isotope({
        itemSelector: ".portfolio-box"
    });
    let $container = $(".portfolio-container").isotope()
    $(".filter>.filter-item>.filter-link").click(function () {
        $(this).addClass('active');
        $(this).parent().siblings().find('.filter-link').removeClass('active')
        let filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        })
    });
    /* progress counter */
    $(".counter").counterUp({
        delay: 17,
        time: 3000
    });
});
