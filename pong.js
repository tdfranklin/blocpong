var w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

var h = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

var canvas = document.getElementById("blocPong");
canvas.width = w;
canvas.height = h;
var context = canvas.getContext("2d");

(function draw() {
    context.fillStyle = "#35BAF8";
    context.fillRect(0, 0, w, h);
})()