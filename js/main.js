$(function () {
    $('#fullpage').fullpage({
        anchors: ['01', '02', '03', '04', '05'],
        onLeave: function (index, nextIndex, direction) {
            $('nav li').eq(nextIndex - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(nextIndex - 1).addClass('on').siblings().removeClass('on');
        }
    });
});