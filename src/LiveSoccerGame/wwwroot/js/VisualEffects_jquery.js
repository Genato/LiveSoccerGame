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
    PositionBallOnCenterOfPlayground();
});

$(window).resize(function () {
    PositionBallOnCenterOfPlayground();
});

function PositionBallOnCenterOfPlayground()
{
    var _ContainerPosition = $(".PlayGroundImage").offset();
    var _ContainerHeight = $(".PlayGroundImage").height();
    var _ContainerWidth = $(".PlayGroundImage").width();
    var ballTopPosition = ((_ContainerHeight / 2) + _ContainerPosition.top) - ($("#BallImage").height() / 2);
    var ballLeftPosition = ((_ContainerWidth / 2) + _ContainerPosition.left) - ($("#BallImage").width() / 2);
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
        x: [$(".Ball").offset().x],
        y: [$(".Ball").offset().y]
    }

    for (var directionCoefficient = 1, i = 0; IsBallInsidePlayground(directionPath, playGroundBorder, i); directionCoefficient += 1, ++i) {
        
        directionPath.x.push(ballCenterCordinate.x + vectorDirection.x * directionCoefficient);
        directionPath.y.push(ballCenterCordinate.y + vectorDirection.y * directionCoefficient);
    }

    return directionPath;
}

function Move(direction)
{
    var length = Object.keys(direction.x).length;
    $(".Ball").animate({ left: direction.x[length-1], top: direction.y[length-1] }, { duration: 1000 });
}

function GetBallCenterCordinate()
{
    var ballLeftTop = $(".Ball").offset();
    var ballHeight = $("#BallImage").height();
    var ballWidth = $("#BallImage").width();
    var ballCenter = { x: (ballLeftTop.left + (ballWidth / 2)), y: (ballLeftTop.top + (ballHeight / 2)) };

    return ballCenter;
}

function IsBallInsidePlayground(directionPath, playGroundBorder, i)
{
    if (directionPath.x[i] <= playGroundBorder.left)
        return false;
    else if (directionPath.y[i] <= playGroundBorder.top)
        return false;
    else if (directionPath.x[i] >= ($(".PlayGroundImage").width() + playGroundBorder.left))
        return false;
    else if (directionPath.y[i] >= ($(".PlayGroundImage").height() + playGroundBorder.top))
        return false;

    return true;
}


// Moving Ball - End



