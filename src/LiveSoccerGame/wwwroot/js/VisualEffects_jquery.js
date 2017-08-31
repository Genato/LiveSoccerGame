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
$(".Ball").click(function (mouseClick) {

    var direction = GetDirection(mouseClick);
    Move(direction);
});

function GetDirection(mouseClick)
{
    var mouseClickCordinates = { x: mouseClick.pageX, y: mouseClick.pageY };
    var ballCenterCordinate = GetBallCenterCordinate();
    var vectorDirection = { x: (ballCenterCordinate.x - mouseClickCordinates.x), y: (ballCenterCordinate.y - mouseClickCordinates.y) };
    var playGroundBorder = $(".PlayGroundImage").offset();
    var directionPath = {
        x: [ballCenterCordinate.x + vectorDirection.x, ballCenterCordinate.x + vectorDirection.x],
        y: [ballCenterCordinate.y + vectorDirection.y, ballCenterCordinate.y + vectorDirection.y]
    }

    for (var directionCoefficient = 1, i = 0; directionPath.x[i] >= playGroundBorder.left && directionPath.y[i] >= playGroundBorder.top ; directionCoefficient += 1, ++i) {

        directionPath.x.push(ballCenterCordinate.x + vectorDirection.x * directionCoefficient);
        directionPath.y.push(ballCenterCordinate.y + vectorDirection.y * directionCoefficient);
    }

    return directionPath;
}

function Move(direction)
{
    var length = Object.keys(direction.x).length;

    $(".Ball").animate({ left: direction.x[length-1], top: direction.y[length-1] }, { duration: 5000 });

    //$(".Ball").animate({ left: direction.x[i], top: direction.y[i] },
    //    {
    //        duration: 2000,
    //        complete: function () {
    //            $(".Ball").animate({ left: 2000 }, {
    //                duration: 5000,
    //                complete: function () {
    //                    move();
    //                }
    //            });
    //        }
    //    }
    //);
}

function GetBallCenterCordinate()
{
    var ballLeftTop = $(".Ball").offset();
    var ballHeight = $("#BallImage").height();
    var ballWidth = $("#BallImage").width();
    var ballCenter = { x: (ballLeftTop.left + (ballWidth / 2)), y: (ballLeftTop.top + (ballHeight / 2)) };

    return ballCenter;
}


///
///Random moving
///
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
///
///
///


// Moving Ball - End
