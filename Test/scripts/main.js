'use strict';

/**
* Check scroll-bar width
* exemple ->   let scroll = $.scrollbarWidth();
*/
$.scrollbarWidth = function () {
    var a, b, c;if (c === undefined) {
        a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b = a.children();c = b.innerWidth() - b.height(99).innerWidth();a.remove();
    }return c;
};

var scroll = $.scrollbarWidth();

function openMenu() {
    $('.menu_btn').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('.text').text('menu');
            $(this).closest('.header_fixed').find('.main_nav').removeClass('active');
            $('body').css('margin-right', '');
            $('html').css('overflow', '');
        } else {
            $(this).addClass('active');
            $(this).find('.text').text('close');
            $(this).closest('.header_fixed').find('.main_nav').addClass('active');
            $('body').css('margin-right', scroll);
            $('html').css('overflow', 'hidden');
        }
    });
}

$(document).ready(function () {
    openMenu();
});

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    $('.parallax_item').each(function () {
        var offset_wrapper = $(this).closest('.parallax_wrapper').offset().top;

        $(this).css({
            'transform': 'translate3d(0,' + (scrolled - offset_wrapper) * -0.1 + 'px, 0)'
        }).css('transition', 'all 1s cubic-bezier(0.39, 0.58, 0.37, 0.94)');
    });

    if ($(window).scrollTop() > 60) {
        $('.header_fixed').addClass('active');
    } else {
        $('.header_fixed').removeClass('active');
    }
});
