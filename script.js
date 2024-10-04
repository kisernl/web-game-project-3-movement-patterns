/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 100;
const enemiesArray = [];

//////// refactored into a class to create multiple enemies!
// enemy1 = {
//   x: 0,
//   y: 0,
//   width: 200,
//   height: 200,
// };

class Enemy {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.width = 100;
    this.height = 100;
    this.speed = Math.random() * 4 - 2;
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
  }
  draw() {
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}
// const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}
// console.log(enemiesArray);
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //   enemy1.update();
  ////// refactored below as update in Enemy class
  //   enemy1.x++;
  //   enemy1.y++;
  //   ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
  //   enemy1.draw();
  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// at 1:42:04 on youtube video tutorial -- https://www.youtube.com/watch?v=GFO_txvwK_c
