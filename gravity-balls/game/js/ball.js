class Ball {

    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize

        this.ballSize = { w: 50, h: 50 }
        this.ballPos = { x: 0, y: 50 }
        this.ballVel = { x: 10, y: 1 }
        this.gravity = .5

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'img/ball.png'

        this.draw()
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.x += this.ballVel.x
        this.ballVel.y += this.gravity
        this.ballPos.y += this.ballVel.y

        if (this.ballPos.y >= this.canvasSize.h - this.ballSize.h) {
            this.changeVelY()
        }

        if (this.ballPos.x >= this.canvasSize.w - this.ballSize.w) {
            this.changeVelX()
        }
    }

    changeVelX() {
        this.ballVel.x *= -1
    }

    changeVelY() {
        this.ballVel.y *= -1
    }
}