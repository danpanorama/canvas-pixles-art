class Particle{
    constructor(effect,x,y,color ){
        this.effect = effect
        this.x = Math.random() * this.effect.h; 
        this.y = Math.random() * this.effect.h; 
        this.size =  this.effect.gap -1
        this.originX = Math.floor(x);
        this.originY = Math.floor(y);
        this.vx = 0;
        this.vy = 0;
        this.fraiction = 0.95;
        this.ease = 0.5
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
      
        this.color = color
    }
    draw(ctx){
      
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size,this.size);
     
        
        
    }
    update(){
        this.dx = this.effect.mouse.x - this.x;
        this.dy = this.effect.mouse.y - this.y;

        this.distance = this.dx * this.dx + this.dy *this.dy;
        this.force = -this.effect.mouse.radius / this.distance
        if(this.distance < this.effect.mouse.radius){
            this.angle = Math.atan2(this.dy,this.dx)
            this.vx += this.force * Math.cos(this.angle);
            this.vy += this.force * Math.sin(this.angle)

        }
      
        this.x += (this.vx *= this.fraiction) + (this.originX - this.x ) *  this.ease;
        this.y +=(this.vy *= this.fraiction) + (this.originY - this.y )*  this.ease;

    }

}