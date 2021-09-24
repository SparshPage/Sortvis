

//sorting algorithm
//this fucntion needs to be tweaked to fit with the animation loop
fun insert(array, rightIndex, value){
    for(var j = rightIndex; j>=0 && array[j]> value; j--){
        arr[j+1] = arr[j];
    }
    arr[i+1] = value
}

for(i = 1; i< array.length; i++){
    insert(array, i-1, arr[i])
}

function  insert(array, i, j){
      if(j>=0 && sticks[j].height > sticks[i].height){
        sticks[j+1] = sticks[j];
    }
    else{
        sticks[j+1] = sticks[i]; 
    }

}



function sort(){
    for(i =1; i< array.length; i++){
        for(j = i-1; j>=0 && array[j].height > array[i].height){
            array[j+1] = attay[j];
        }
        array[j+1] = value;
    }
}


function draw() {
   var i = 1; 
   if(i < sticks.length){
       insert(sticks, i, i - 1);
   }
   i++;

   
}

//Drawing part
object = {
    h : random(1-m),
    w : w,
    color: col,
    this.setHeight = (h)=>{
        this.h = h;
    }
}