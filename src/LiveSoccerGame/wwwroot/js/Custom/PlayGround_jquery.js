// Ball image on load
$("#_Container").ready(function () {
    $("#player1").text('0');
    $("#player2").text('0');
    PositionBallOnCenterOfPlayground();
});
//

//On window resizing - resize playground
$(window).resize(function () {
    PositionBallOnCenterOfPlayground();
});
//

//New game
function newGame() {
    $("#player1").text('0');
    $("#player2").text('0');
    $("#player1ID_DIV").css({ "background-color": "" });
    PositionBallOnCenterOfPlayground();
}
//

//Next game
function nextPlayer() {
    $("#player1ID_DIV").css({ "background-color": "" });
    PositionBallOnCenterOfPlayground();
}
//

function PositionBallOnCenterOfPlayground() {
    var _ContainerPosition = $(".PlayGroundImage").offset();
    var _ContainerHeight = $(".PlayGroundImage").height();
    var _ContainerWidth = $(".PlayGroundImage").width();
    var ballTopPosition = ((_ContainerHeight / 2) + _ContainerPosition.top) - ($("#BallImage").height() / 2);
    var ballLeftPosition = ((_ContainerWidth / 2) + _ContainerPosition.left) - ($("#BallImage").width() / 2);
    $(".Ball").css({ "left": +ballLeftPosition, "top": +ballTopPosition });
}

// Move Ball
$(".Ball").click(function (mouseClick) {
    var direction = GetDirection(mouseClick);
    Move(direction);
});

function GetDirection(mouseClick) {
    var mouseClickCordinates = { x: mouseClick.pageX, y: mouseClick.pageY };
    var ballCenterCordinate = GetBallCenterCordinate();
    var vectorDirection = { x: (ballCenterCordinate.x - mouseClickCordinates.x), y: (ballCenterCordinate.y - mouseClickCordinates.y) };
    var playGroundBorder = $(".PlayGroundImage").offset();
    var directionPath = {
        x: [$(".Ball").offset().x],
        y: [$(".Ball").offset().y]
    }

    for (var directionCoefficient = 1, i = 0; IsBallInsidePlayground(directionPath, playGroundBorder, i) ; directionCoefficient += 1, ++i) {

        directionPath.x.push(ballCenterCordinate.x + vectorDirection.x * directionCoefficient);
        directionPath.y.push(ballCenterCordinate.y + vectorDirection.y * directionCoefficient);
    }

    return directionPath;
}

function GetBallCenterCordinate() {
    var ballLeftTop = $(".Ball").offset();
    var ballHeight = $("#BallImage").height();
    var ballWidth = $("#BallImage").width();
    var ballCenter = { x: (ballLeftTop.left + (ballWidth / 2)), y: (ballLeftTop.top + (ballHeight / 2)) };

    return ballCenter;
}

function IsBallInsidePlayground(directionPath, playGroundBorder, i) {

    var ballSize = $("#BallImage").height() + 5;

    if ((directionPath.x[i] - 5) <= playGroundBorder.left)
        return false;
    else if (directionPath.y[i] <= playGroundBorder.top)
        return false;
    else if ((directionPath.x[i] + ballSize) >= ($(".PlayGroundImage").width() + playGroundBorder.left))
        return false;
    else if ((directionPath.y[i] + ballSize) >= ($(".PlayGroundImage").height() + playGroundBorder.top))
        return false;

    return true;
}

function Move(direction) {
    var ballCenterPosition = GetBallCenterCordinate();
    var length = Object.keys(direction.x).length;
    $(".Ball").animate({ left: direction.x[length - 1], top: direction.y[length - 1] }, 1000, "linear", function () { checkIsItGoal(); });
    $.stopSound();
}

function checkIsItGoal() {

    var ballCenterPosition = GetBallCenterCordinate();
    var playGroundBorder = $(".PlayGroundImage").offset();
    var playGroundWidth = $(".PlayGroundImage").width();
    var playGroundHeight = $(".PlayGroundImage").height();

    var distanceBetweenGoalAndTopBottomBorder = (44.8 * playGroundHeight) / 100;
    var distanceFromGoalToCloserBorder = (0.9 * playGroundWidth) / 100;
    var distanceFromGoalToFurtherBorder = (96.6 * playGroundWidth) / 100;
    var player1Score = parseInt($("#player1").text());

    if (ballCenterPosition.y > (playGroundBorder.top + distanceBetweenGoalAndTopBottomBorder) &&
        ballCenterPosition.y < ((playGroundBorder.top + playGroundHeight) - distanceBetweenGoalAndTopBottomBorder) &&
        ballCenterPosition.x > (playGroundBorder.left + distanceFromGoalToCloserBorder) &&
        ballCenterPosition.x < (playGroundBorder.left + playGroundWidth) - distanceFromGoalToFurtherBorder
        )
    {
        $("#player1").text(player1Score + 1);
        $("#player1ID_DIV").css({ "background-color": "#646efc" });

        $.playSound('../sounds/GoalSound.mp3')
    }

}
//



(function ($) {
    $.extend({
        playSound: function () {
            return $(
                   '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
                     + '<source src="' + arguments[0] + '" />'
                     + '<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
                   + '</audio>'
                 ).appendTo('body');
        },
        stopSound: function () {
            $(".sound-player").remove();
        }
    });
})(jQuery);