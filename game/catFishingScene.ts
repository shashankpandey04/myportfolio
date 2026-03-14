import * as Phaser from "phaser";

export default class CatFishingScene extends Phaser.Scene {
  private score = 0;
  private lives = 3;
  private targetX = 0;

  private background!: Phaser.GameObjects.Image;
  private cat!: Phaser.Physics.Arcade.Sprite;
  private fishes!: Phaser.Physics.Arcade.Group;

  private scoreText!: Phaser.GameObjects.Text;
  private livesText!: Phaser.GameObjects.Text;

  constructor() {
    super("CatFishingScene");
  }

  preload() {
    this.load.image("cat", "/game/cat.png");
    this.load.image("fish", "/game/fish.png");
    this.load.image("bg", "/game/background.png");
  }

  create() {
    const { width, height } = this.scale;

    this.score = 0;
    this.lives = 3;
    this.targetX = width / 2;

    this.background = this.add.image(0, 0, "bg").setOrigin(0);
    this.background.setDisplaySize(width, height);

    this.scoreText = this.add.text(30, 20, "🐟 0", {
      fontSize: "28px",
      fontStyle: "bold",
      color: "#facc15",
    }).setDepth(2);

    this.livesText = this.add.text(
      this.scale.width - 160,
      20,
      "❤️❤️❤️",
      {
        fontSize: "28px",
      }
    ).setDepth(2);

    this.cat = this.physics.add.sprite(width / 2, height - 120, "cat");
    this.cat.setScale(0.18);
    this.cat.setImmovable(true);
    this.cat.setCollideWorldBounds(true);

    this.fishes = this.physics.add.group({
      allowGravity: false,
    });

    this.input.on("pointermove", (pointer: Phaser.Input.Pointer) => {
      this.targetX = pointer.x;
    });
    
    this.time.addEvent({
      delay: 850,
      callback: this.spawnFish,
      callbackScope: this,
      loop: true,
    });

    this.physics.add.overlap(
      this.cat,
      this.fishes,
      (cat, fish) => {
        this.catchFish(
          cat as Phaser.Physics.Arcade.Sprite,
          fish as Phaser.Physics.Arcade.Sprite
        );
      },
      undefined,
      this
    );

    this.add.rectangle(
      this.scale.width / 2,
      40,
      this.scale.width,
      70,
      0x000000,
      0.35
    ).setDepth(1);

    this.scale.on("resize", this.handleResize, this);
  }

  spawnFish() {
    const width = this.scale.width;

    const x = Phaser.Math.Between(60, width - 60);

    const fish = this.fishes.create(x, -20, "fish") as Phaser.Physics.Arcade.Sprite;

    fish.setScale(0.12);
    fish.setVelocityY(Phaser.Math.Between(170, 240));
  }

  catchFish(
    cat: Phaser.Physics.Arcade.Sprite,
    fish: Phaser.Physics.Arcade.Sprite
  ) {
    fish.destroy();

    this.score += 1;

    this.scoreText.setText("Score: " + this.score);

    const pop = this.add.text(fish.x, fish.y, "+1", {
      fontSize: "22px",
      color: "#facc15",
    });

    this.tweens.add({
      targets: pop,
      y: fish.y - 50,
      alpha: 0,
      duration: 600,
      ease: "Power2",
      onComplete: () => pop.destroy(),
    });
  }

  handleResize(gameSize: Phaser.Structs.Size) {
    const { width, height } = gameSize;

    this.background.setDisplaySize(width, height);

    this.cat.setY(height - 120);
  }

  update() {
    const width = this.scale.width;

    const minX = this.cat.displayWidth / 2;
    const maxX = width - this.cat.displayWidth / 2;

    this.cat.setAngle((this.targetX - this.cat.x) * 0.04);

    this.cat.x = Phaser.Math.Linear(
      this.cat.x,
      Phaser.Math.Clamp(this.targetX, minX, maxX),
      0.15
    );

    this.cat.setAngle((this.targetX - this.cat.x) * 0.05);

    this.fishes.getChildren().forEach((fish) => {
      const sprite = fish as Phaser.Physics.Arcade.Sprite;

      if (sprite.y > this.scale.height + 40) {
        sprite.destroy();

        this.lives--;

        this.updateLives();

        if (this.lives <= 0) {
          this.gameOver();
        }
      }
    });
  }

  gameOver() {
    const { width, height } = this.scale;

    this.physics.pause();

    this.add.rectangle(width / 2, height / 2, width, height, 0x000000, 0.6);

    this.add.text(width / 2, height / 2 - 50, "GAME OVER", {
      fontSize: "48px",
      fontStyle: "bold",
      color: "#ffffff",
    }).setOrigin(0.5);

    this.add.text(width / 2, height / 2 + 20, "Click to Restart", {
      fontSize: "22px",
      color: "#facc15",
    }).setOrigin(0.5);

    this.input.once("pointerdown", () => {
      this.scene.restart();
    });
  }

  updateLives() {
    this.livesText.setText("❤️".repeat(this.lives));
  }

  shutdown() {
    this.scale.off("resize", this.handleResize, this);
  }
}