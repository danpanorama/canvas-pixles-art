class Effect{
    constructor(w,h){
       this.particleArray = [];
       this.image = document.getElementById('img')
       this.w = w;
       this.h = h;

       this.centerX = this.w * 0.5;
       this.centerY = this.h * 0.5;
       this.x = this.centerX - this.image.width * 0.5;
       this.y = this.centerY - this.image.height + 0.5;
       this.gap = 3;
       this.mouse = {
        radius: 3000,
        x:undefined,
        y:undefined
       }
       window.addEventListener('mousemove',(e)=>{
        this.mouse.x = e.x;
        this.mouse.y = e.y;
       })

      
       
    }
    init(ctx){
         ctx.drawImage(this.image,this.x,this.y);
         const pixels = ctx.getImageData(0, 0, this.w, this.h).data;
       
         for(let y = 0; y < this.h; y += this.gap){
           
            for(let x = 0; x < this.w; x += this.gap){
                const index = (y * this.w + x) * 4 
                const red = pixels[index];
                const green = pixels[index + 1];
                const blue = pixels[index + 2];
                const alpha = pixels[index + 3]
                const color = 'rgb('+red +','+green+','+blue+')';
                
                if(alpha > 0){
                   
                    this.particleArray.push(new Particle(this, x, y, color))
                }

            }
         }
        
        
    }
    draw(ctx){
        this.particleArray.forEach((e)=>{ e.draw(ctx) })

    }
    update(){
        this.particleArray.forEach((e)=>{
         e.update()

        })

    }
    
}