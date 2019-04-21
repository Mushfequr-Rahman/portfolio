
var sun = new Image();
var moon = new Image();
var earth = new Image();
var news = new Image();
function init() {
  sun.src = 'images/canvas_background.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'images/fifa_schedule.png';
  news.src = 'images/News_detector.png'
  window.requestAnimationFrame(draw);
}

const icon_height = 30;
const icon_width = 30;

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 2000, 2000); // clear canvas

  ctx.fillStyle = 'rgba(0, 0, 100, 0.4)';
  ctx.strokeStyle = 'rgba(100, 0, 0, 0.4)';
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(135, 0);

  ctx.drawImage(earth, -12, -12, icon_width , icon_height);

  //News Detector image
  ctx.save()
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(125,0);
  ctx.drawImage(news,-12,-12,icon_width,icon_height);
  ctx.restore()
  // Moon
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 135, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();


  // Sun
  //ctx.drawImage(sun, 0, 0, 700, 700);

  window.requestAnimationFrame(draw);
}

init();
