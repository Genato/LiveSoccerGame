/*PreierLegaueIcon effects*/
$('.PreierLegaueIcon').hover(MakeBigger, ReturnToOriginalSize);

function MakeBigger()
{
    $(this).css({ "width": '+=4px' });
    $('.Container_Override').css({ "text-shadow": "1px 1px white", "margin-left": "+=5px" });
}

function ReturnToOriginalSize()
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
// Ball image on load - End

// Moving Ball - Start
$(".Ball").click(function () {

    var ballCenterCordinate = GetBallCenterCordinate();

    animateDiv();

    //Move();
});

function Move()
{
    $(".Ball").animate({ left: 800, top: 200 },
        {
            duration: 2000,
            complete: function () {
                $(".Ball").animate({ left: 2000 }, {
                    duration: 5000,
                    complete: function () {
                        move();
                    }
                });
            }
        }
    );
}

function GetBallCenterCordinate()
{
    var ballLeftTop = $(".Ball").offset();
    var ballHeight = $("#BallImage").height();
    var ballWidth = $("#BallImage").width();
    var ballCenter = { left: (ballLeftTop.left + (ballWidth / 2)), top: (ballLeftTop.top + (ballHeight / 2)) };

    return ballCenter;
}


function animateDiv() {
    var newq = makeNewPosition();
    $('.Ball').animate({ top: newq[0], left: newq[1] }, function () {
        animateDiv();
    });

};

function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(".PlayGroundImage").height() - 50;
    var w = $(".PlayGroundImage").width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}
// Moving Ball - End
