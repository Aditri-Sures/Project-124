function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(500,400);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded(){
console.log("model has loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}



function draw(){
background("aqua");
}

