class BoundingBox{
    constructor(x,y,width,height){
        Object.assign(this,{x,y,width,height})
        this.left = x; 
        this.right = this.left + this.width;
        this.top = y;
        this.bottom = this.top + this.height;


    };

    collide(other){        
        if (this.right  > other.left   && 
            this.left   < other.right  && 
            this.top    < other.bottom && 
            this.bottom > other.top) {
            return true;}
        return false;
    }

    draw(ctx){
        ctx.strokeStyle = "Red";
        ctx.lineWidth = 3;
        ctx.strokeRect(this.x,this.y,this.width,this.height);
    }
}