var user, noseX, noseY, size, leftWristX, rightWristX
function setup(){
    canvas = createCanvas(550, 500)
    canvas.position(550, 150)
    video = createCapture(VIDEO)
    video.size(550, 500)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function submit(){
    user = document.getElementById("name").value
    document.getElementById("name").value = ""
}
function draw(){
    background("grey")
    stroke("#F90093")
    fill("#F90093")
    textSize(size)
    text(user, noseX, noseY)
}
function modelLoaded(){
    console.log("PoseNet is Initialized")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        size = floor(leftWristX - rightWristX)
    }
    else{
        console.log("Error")
    }
}
