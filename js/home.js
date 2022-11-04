class Home{
    show(){
        // let m=document.getElementById('main');
        // while (m.firstChild) {
        //   m.removeChild(m.firstChild)
        // }
  //      let canvas = document.getElementById('canvas');
  //      console.log('fdgdgdg')
      
  //      const ctx = canvas.getContext("2d");
  //      canvas.width = window.innerWidth;
  //      canvas.height = window.innerHeight;
  //      let initial = new Effect(canvas.width,canvas.height);

    
  //      initial.init(ctx)
       

  //    function animate(){
  //     ctx.clearRect(0,0,canvas.width,canvas.height)
  //     initial.draw(ctx)
  //    initial.update()
   
      
  //     requestAnimationFrame(animate);
  //    }
  // animate()
  
   

      //  let particle = new Particle;
      //  particle.draw(ctx);

    
   
       

   



    }
}



window.addEventListener('load',(e)=>{
  let canvas = document.getElementById('canvas');
 
 
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let initial = new Effect(canvas.width,canvas.height);


  initial.init(ctx)
  

function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height)
 initial.draw(ctx)
initial.update()

 
 requestAnimationFrame(animate);
}
animate()
})