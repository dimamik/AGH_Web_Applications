var gameArea = document.getElementById('gameArea');
var pointsBox = document.getElementById("pointsBox");
var endtext = document.getElementById("endtext");
var pointsCount = 0;
var circle;
var balloons_count = 0;
var MAX_BALOONS = 5;
var timer;
// highscore json blob: https://jsonblob.com/_WSTAW_SWOJ_HASH_JSON"

gameArea.addEventListener("click", removePoints);

/**
 * Funtion to generate randomInt in range [min,max]
 * @param {min} min value
 * @param {max} max value
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Function that generates and appends circle to the view
 * Also we are adding an event listener on generation and checking on game_over
 */

function appendCircle() {
    if (balloons_count > MAX_BALOONS) {
        endtext.innerHTML = "GAME OVER with score: " + pointsCount + "\n" + "Click in any palce to restart";
        stopInterval();
        gameArea.addEventListener("click", game);
        return;
    }
    balloons_count += 1;
    circle = document.createElement('div');
    circle.className = 'balloon';
    gameArea.appendChild(circle);
    circle.addEventListener("click",
        function callback(e) {
            removeCircle(circle);
            e.stopPropagation();
        }, false
    );

    var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
    var top = getRandomInt(-38, 30);
    var left = getRandomInt(-50, 37);

    circle.style.cssText = `
    background-color: ${color};
    top: ${top}%;
    left: ${left}%;
    `;

}

/**
 * Remove circle from DOM
 * @param {*} itemEl elementChild of gameArea
 */
function removeCircle(itemEl) {
    pointsCount += 1;
    gameArea.removeChild(itemEl);
    appendCircle();
    update();

}


function removePoints() {
    pointsCount -= 1;
    update();
}

function update() {
    pointsBox.innerHTML = pointsCount;
}

function startInterval() {
    timer = setInterval(function () {
        gameArea.removeChild(circle);
        appendCircle();
    }, 2000);
}
function stopInterval() {
    clearInterval(timer);
}
/**
 * Main game function
 */
function game() {
    endtext.innerHTML = "";
    gameArea.removeEventListener("click", game);
    balloons_count = 0;
    pointsCount = 0;
    appendCircle();
    startInterval();
}
game();