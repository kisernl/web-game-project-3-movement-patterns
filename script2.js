/** @type {HTMLCanvasElement} */
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
const CANVAS_WIDTH_2 = (canvas2.width = 350);
const CANVAS_HEIGHT_2 = (canvas2.height = 700);
const numberOfEnemies2 = 20;
const enemiesArray2 = [];

let gameFrame2 = 0;

class Enemy2 {
  constructor() {
    this.image = new Image();
    this.image.src = "img/enemy2.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas2.width - this.width);
    this.y = Math.random() * (canvas2.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    // this.angle = Math.random() * 2;
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.2;
    this.curve = Math.random() * 7;
  }
  update() {
    this.x -= this.speed;
    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) this.x = canvas2.width;
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

// at on youtube video tutorial -- https://www.youtube.com/watch?v=GFO_txvwK_c
