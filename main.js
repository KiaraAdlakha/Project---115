function preload()
{

}
function setup()
{
canvas=createCanvas(300,300);
canvas.position(800,200);
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose", got_poses)
}
function draw()
{
background("yellow");
image(video,0,0,300,300);
}
function modelLoaded()
{
    console.log("PoseNet is Loaded");
}
function got_poses(result)
{
if (result.length > 0)
{
    console.log(result);
    console.log("nose x position ="+result[0].pose.nose.x);
    console.log("nose y position ="+result[0].pose.nose.y);
}
}