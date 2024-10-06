/** @type {HTMLCanvasElement} */
const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
const CANVAS_WIDTH = (canvas1.width = 350);
const CANVAS_HEIGHT = (canvas1.height = 700);
const numberOfEnemies = 10;
const enemiesArray = [];

// const enemyImage = new Image();
// enemyImage.src = "img/enemy1.png";
let gameFrame = 0;

//////// refactored into a class to create multiple enemies!
// enemy1 = {
//   x: 0,
//   y: 0,
//   width: 200,
//   height: 200,
// };

// BAT random hover enemy
class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "img/enemy1.png";
    // this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas1.width - this.width);
    this.y = Math.random() * (canvas1.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += Math.random() * 10 - 5;
    this.y += Math.random() * 10 - 5;
    // animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    // ctx1.strokeRect(this.x, this.y, this.width, this.height);
    ctx1.drawImage(
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
// const enemy1 = new Enemy();
for (let i = 0; i < numberOfEnemies; i++) {
  enemiesArray.push(new Enemy());
}
// console.log(enemiesArray);
function animate() {
  ctx1.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //   enemy1.update();
  ////// refactored below as update in Enemy class
  //   enemy1.x++;
  //   enemy1.y++;
  //   ctx1.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
  //   enemy1.draw();
  enemiesArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();

// at 1:51:50 on youtube video tutorial -- https://www.youtube.com/watch?v=GFO_txvwK_c
