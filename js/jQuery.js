/**
 * Created by Andrey on 12-Feb-17.
 */

$(function () {
    $('#fS').click(function () {
        $('form').slideToggle('1500');
    });

    $('#cancel').click(function () {
        $('form').slideUp('1500');
    });
    $('article').css('display', 'none');
    $('article').fadeIn(1200);
    $('article.main img').css({
        'width': '0'
    });
    $('article.main img').animate({
        'width': '320',
    }, 500);
});


