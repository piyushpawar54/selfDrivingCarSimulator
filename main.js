const canvas = document.getElementById("myCanvas");

canvas.width = 200;

const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

animate();

function animate() {
  car.update();
  //resizes and refresh the canvas
  canvas.height = window.innerHeight;
  car.draw(ctx);

  //calls the animate method again and again and gives illusion of movement
  requestAnimationFrame(animate);
}
