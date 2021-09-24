var canvas =  document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var height = canvas.height;
var width = canvas.width;
var n = 50;
var sticks = [];


var min = 0;
var max = height;
var a = 1;
var b;  
for(let i = 0; i< width; i++){
    sticks[i] = Math.floor(Math.random()*(max-min)+min)
}
function showStick(x,h){
    ctx.beginPath();
    ctx.moveTo(x,width);
    ctx.lineTo(x, h);
    ctx.stroke();

}

console.log(sticks.length);

//sticks[0].setHeight(100);



var stick = 0;
//var j = 0;
function draw(){
    //console.log(i,j,n)
    ctx.clearRect(0,0,width, height)
    if(a < sticks.length){
        let value = sticks[a];
        for(b = a-1;b>=0 && sticks[b]> value; b--){
            sticks[b+1] = sticks[b];
        }
        //console.log(sticks)
        sticks[b+1] = value;
    }

    a++;



    //draw some shit
    for(let i = 0; i< width; i++){
        showStick(i,sticks[i]);
    }
    
}

console.log(sticks);
function loop(){
    setTimeout(()=> {
        requestAnimationFrame(loop);
    }, 1000/60);

    draw();
}

loop();