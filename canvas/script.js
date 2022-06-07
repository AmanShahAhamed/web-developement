// var canvas = document.querySelector('canvas');
// var c = canvas.getContext('2d');
// canvas.height = window.innerHeight * 0.8;
// canvas.width = window.innerWidth * 0.8;
// var vx=Math.floor(Math.random()*2);
// var vy=Math.floor(Math.random()*4);
// function Circle(x, y, r, color) {
//     var obj = {};
//     obj.x = x,
//         obj.y = y,
//         obj.r = r,
//         obj.color = color,
//         obj.draw = function () {
//             requestAnimationFrame(this.draw);
//             c.clearRect(0,0,innerWidth,innerHeight);
//             c.beginPath();
//             c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
//             c.strokeStyle = this.color;
//             c.stroke();
//             if(this.r+this.x>innerWidth || this.x-this.r<0)
//             vx=0-vx;
//             if(this.r+this.y>innerHeight || this.y-this.r<0)
//             vy=0-vy;
//             x=x+vx;
//             y=y+vy;

//         }
//     return obj;
// }

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.height = window.innerHeight * 0.8;
canvas.width = window.innerWidth * 0.8;
function Circle(x,y,dx,dy,radius,color){
    
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.color=color;
    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle=color;
        c.stroke();
        console.log(this.x,this.y);
    }
    this.update=function(){
        if(this.radius+this.x>canvas.width || this.x-this.radius<0)
            this.dx=0-this.dx;
            if(this.radius+this.y>canvas.height || this.y-this.radius<0)
            this.dy=0-this.dy;
            this.x=this.x+this.dx;
            this.y=this.y+this.dy;
            this.draw();
    }
}

var circleArray=[];
for(let i=0;i<500;i++){
    let x=Math.floor(Math.random()*(canvas.width));
    let y=Math.floor(Math.random()*(canvas.height));
    let vx=Math.floor(Math.random()*4);
    let vy=Math.floor(Math.random()*6);
    let color='rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+0.5+')';
    circleArray.push(new Circle(x,y,vx,vy,20,color));
}
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0;i<500;i++){
        circleArray[i].update();
    }
}
animate();





