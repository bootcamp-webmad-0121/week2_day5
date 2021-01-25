const game = {
    name: 'Bouncing ball game',
    description: 'Bouncing ball canvas game for gravity learning',
    version: '1.0.0',
    author: 'Popino Álvarez',
    license: undefined,
    canvasDOM: undefined,
    ctx: undefined,
    balls: [],
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keys: {
        space: 'Space'
    },
    init(id) {
        this.canvasDOM = document.getElementById(id)
        this.ctx = this.canvasDOM.getContext('2d')
        this.setDimensions()
        this.setEventListeners()
        this.drawAll()
    },
    setDimensions() {
        this.canvasSize = { w: window.innerWidth, h: window.innerHeight }
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    setEventListeners() {
        window.onresize = () => this.setDimensions()
        document.onkeyup = e => e.code === this.keys.space ? this.generatenewBall() : null
    },
    generatenewBall() {
        const ball = new Ball(this.ctx, this.canvasSize)
        this.balls.push(ball)
        console.log(this.balls)
    },
    startInterval() {
        setInterval(() => {
            this.clearScreen()
            this.drawAll()
            this.clearAll()
        }, 20)
    },
    drawAll() {
        // this.ball ? this.ball.draw() : null
        // this.ball?.draw()
        this.balls.forEach(elm => elm.draw())
    },
    clearAll() {
        this.balls = this.balls.filter(elm => elm.ballPos.x > -elm.ballSize.w)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}