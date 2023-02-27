class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, scale = 1, spriteBorderWidth = 0) {
        Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration, scale, spriteBorderWidth })
        
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;

    };  


    drawFrame(tick, ctx, x, y) {

        this.elapsedTime += tick;
        if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();
        

        ctx.drawImage(this.spritesheet, 
            this.xStart + (this.width + this.spriteBorderWidth) * frame, this.yStart,
            (this.width - this.spriteBorderWidth), this.height,
            x, y,
            this.width * this.scale, this.height * this.scale);


    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
};
