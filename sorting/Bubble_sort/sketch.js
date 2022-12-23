let data = [15 ,10 ,12 ,17 ,13 , 14 , 20,  19 ]
let iteration_j = 0;
let swap = 0;
let completed = false;

function setup() {
    createCanvas(0, 0);
}
  
function draw() {
    resizeCanvas(windowWidth, windowHeight);
    background(20);
    showElements(data);   
    if(completed == true){
        textSize(32);
        fill(255);
        text("Sorted Successfully", getValX(0.4), getValY(0.5));
        noLoop();
    }

}

function showElements(arr){
    //max value in array will decide height
    let max_val = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max_val)
            max_val = arr[i];
    }

    let x = 0.1;
    let y = 0.1;
    let w = 0.025;

    // map max value to height 0.3 

    for(let i = 0 ; i < arr.length ; i++){

        if(i == iteration_j)
            fill(0,255,0);
        else if(i == iteration_j+1)
            fill(0,255,0);
        else
            fill(255);
        
        let heightElement = arr[i]/max_val;
        h = heightElement*0.3;

        rect(getValX(x),getValY(2*y+0.3-h),getValX(w),getValY(h));
        // show values
        fill(0);
        textSize(16);
        text(arr[i], getValX(x+w/2.5), getValY(2*y+0.3-h/2));
        x += 0.025;

    }
}


function getValX(x){
    if(x <= 1 && x>=0)
        return windowWidth*x;
    return -1;
}

function getValY(y){
    if(y <= 1 && y>=0)
        return windowHeight*y;
    return -1;
}

// perform a sort operation after every function call


function sort_(){

    if(iteration_j < data.length){
        
        if(data[iteration_j] > data[iteration_j+1]){
            temp = data[iteration_j];
            data[iteration_j] = data[iteration_j+1];
            data[iteration_j+1] = temp;
            swap++;
        }

        iteration_j++;

        if(iteration_j == data.length){
            if(swap == 0){
                console.log("Sorted");
                completed = true;
            }
            else{
                swap = 0;
            }
            iteration_j = 0;
        }

    }

}