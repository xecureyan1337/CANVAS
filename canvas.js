// var canvas = document.getElementById('myCanvas');
// var gambar = canvas.getContext('2d'); // start object

// gambar.beginPath();
// gambar.moveTo(0, 100);
// gambar.lineTo(200,100);
// gambar.stroke();

var canvas2 = document.querySelector('#testCanvas');

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

var gambar2 = canvas2.getContext('2d');

let x = 300;
let y = 200;
let speed = 5;
let speedX = 15;
let speedY = 15;
let radius = 150;

function draw() {
    window.requestAnimationFrame(draw);
    gambar2.clearRect(0, 0, innerWidth, innerHeight);
    console.log('oke!');

    gambar2.fillStyle = 'green';
    gambar2.beginPath();
    gambar2.arc(x, 200, 150, 0, 2 * Math.PI);
    gambar2.fill();
    gambar2.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        speedX =- speedX;
    }

    if (y + radius > innerWidth || y - radius < 0) {
        speedY =- speedY;
    }
    x+=speedX;
    y+=speedY;
}
draw();

// gambar2.fillStyle = 'red';
// gambar2.strokeStyle = '#000';
// gambar2.linewidth = '5';

// // create arc
// gambar2.fillStyle = 'yellow';
// gambar2.beginPath();
// gambar2.arc(550, 200, 150, 0, 2 * Math.PI);
// gambar2.fill();
// gambar2.stroke();

// // create path
// gambar2.fillStyle = 'blue';
// gambar2.moveTo(900,50);
// gambar2.lineTo(1050,350);
// gambar2.lineTo(750,350);
// gambar2.closePath();
// gambar2.fill();
// gambar2.stroke();