/** @type {HTMLCanvasElement} */
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
const CANVAS_WIDTH_2 = (canvas2.width = 500);
const CANVAS_HEIGHT_2 = (canvas2.height = 1000);
const numberOfEnemies2 = 10;
const enemiesArray2 = [];

// const enemyImage = new Image();
// enemyImage.src = "img/enemy1.png";
let gameFrame2 = 0;

console.log("Go Dukes!");
//////// refactored into a class to create multiple enemies!
// enemy1 = {
//   x: 0,
//   y: 0,
//   width: 200,
//   height: 200,
// };

// BAT random hover enemy2
class Enemy2 {
  constructor() {
    this.image = new Image();
    this.image.src = "img/enemy1.png";
    // this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas2.width - this.width);
    this.y = Math.random() * (canvas2.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += Math.random() * 10 - 5;
    this.y += Math.random() * 10 - 5;
    // animate2 sprites
    if (gameFrame2 % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    // ctx2.strokeRect(this.x, this.y, this.width, this.height);
    ctx2.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
// const enemy1 = new Enemy2();
for (let i = 0; i < numberOfEnemies2; i++) {
  enemiesArray2.push(new Enemy2());
}
// console.log(enemiesArray2);
function animate2() {
  ctx2.clearRect(0, 0, CANVAS_WIDTH_2, CANVAS_HEIGHT_2);
  //   enemy1.update();
  ////// refactored below as update in Enemy2 class
  //   enemy1.x++;
  //   enemy1.y++;
  //   ctx2.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
  //   enemy1.draw();
  enemiesArray2.forEach((enemy2) => {
    enemy2.update();
    enemy2.draw();
  });
  gameFrame2++;
  requestAnimationFrame(animate2);
}
animate2();

// at 1:51:50 on youtube video tutorial -- https://www.youtube.com/watch?v=GFO_txvwK_c
