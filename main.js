noseX=0;
noseY=0;


function preload(){
lipstick = loadImage('https://i.postimg.cc/Xq7D9vxp/10c7f940b16ccc0ff6a58d7318812cfe.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}


    function modeLoaded(){

        console.log('PoseNet Is Initialized');
        
        }


function gotPoses(results){
    {
        if(results.length > 0)
    
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
    
    }
    


function draw(){
    image(video, 0, 0, 300, 300);

}


function take_snapshot(){
 save('myfilterImage.png');
}

