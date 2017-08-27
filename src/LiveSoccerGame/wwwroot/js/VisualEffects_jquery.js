﻿/*PreierLegaueIcon effects*/
$('.PreierLegaueIcon').hover(makeBigger, returnToOriginalSize);

function makeBigger()
{
    $(this).css({ "width": '+=4px' });
    $('.Container_Override').css({ "text-shadow": "1px 1px white", "margin-left": "+=5px" });
}

function returnToOriginalSize()
{
    $(this).css({ width: "" });
    $('.Container_Override').css({ "text-shadow": "", "margin-left": "-=5px" });
}
/*PreierLegaueIcon effects*/

/*Top menu bar text effects*/
$('.TextEffects').hover(TextEffectsHover, TextEffectsUnHover);

function TextEffectsHover()
{
    $(this).css({ "text-shadow": "1.1px 1.1px rgb(128, 170, 255)", "font-size": "+=1px" });
}

function TextEffectsUnHover()
{
    $(this).css({ "text-shadow": "", "font-size": "" });
}
/*Top menu bar text effects*/

// Ball image on load - Start
$("#_Container").ready(function () {
    MoveBall();
});

$(window).resize(function () {
    MoveBall();
});

function MoveBall()
{
    var _ContainerPosition = $("#_Container").offset();
    var _ContainerHeight = $("#_Container").height();
    var _ContainerWidth = $("#_Container").width();
    var ballTopPosition = (_ContainerHeight / 2) + _ContainerPosition.top;
    var ballLeftPosition = (_ContainerWidth / 2) + _ContainerPosition.left;
    $(".Ball").css({ "left": +ballLeftPosition, "top": +ballTopPosition });
}
// Ball image on load - Start
