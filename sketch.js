class Mover { 
    constructor(x,y){ 
      this.location = createVector(x, y); 
      this.velocity = createVector(random(-2,2), random(-2,2)) 
      this.acceleration = createVector(0,0)
    }
    
    display(){ 
      fill('brown'); 
      strokeWeight(8)
      ellipse(this.location.x, this.location.y, 50, 30); 
    } 
    
    update(){ 
      var mouse = createVector(mouseX, mouseY); 
      var dir = mouse.sub(this.location); 
      var topSpeed = 10 
      dir.normalize(); 
      dir.mult(0.5); 
      this.velocity.add(this.acceleration); 
      this.velocity.add(dir); 
      this.velocity.limit(topSpeed) 
      this.location.add(this.velocity);
    } 
    
     cekUjung(){ 
      if ( this.location.x > windowWidth ) { 
        this.location.x = 0; 
      } 
      else if (this.location.x < 0){ 
        this.location.x = windowWidth; 
      } 
     
      if ( this.location.y > windowHeight ) { 
        this.location.y = 0; 
      } 
      else if (this.location.y < 0){ 
        this.location.y = windowHeight; 
      } 
    } 
  }
  
  let movers = [];
  function setup() {
    createCanvas(windowWidth, windowHeight);
    
    for (let i=0; i<10;i++){
      movers[i] = new Mover(random(windowWidth), random(windowHeight));   
    }
  }
  
  function draw() {
    strokeWeight(5)
    background(43, 191, 254)
      fill(245, 245, 223)
      ellipse(mouseX, mouseY, 20, 80)
      
      
    for (let i=0; i<10;i++){
        movers[i].cekUjung(); 
        movers[i].display(); 
        movers[i].update();    
    }
  }