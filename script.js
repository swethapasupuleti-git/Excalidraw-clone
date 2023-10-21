const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

const pen = document.getElementById("pen");
let ispenOn = false;
function onClickingPen(){
    pen.classList.toggle("On");
    ispenOn = !ispenOn;
    if(ispenOn){
    canvas.style.cursor = "crosshair";
    canvas.addEventListener("mousedown", onMousedown);
    }
    else{
    canvas.style.cursor="auto";
    canvas.removeEventListener("mousedown", onMousedown)
    }
}
pen.addEventListener("click", onClickingPen);
//canvas.addEventListener("mousedown", onMousedown);
let previousposition = null;
function onMousedown(event){
//console.log("mousedown", event.clientX, event.clientY);
previousposition = [event.clientX, event.clientY];
canvas.addEventListener("mousemove", onMousemove);
canvas.addEventListener("mouseup", onMouseup);
}
function onMousemove(event){
// console.log("mousemove", event.clientX, event.clientY);
    let currentposition = [event.clientX, event.clientY];
    c.beginPath();
    c.moveTo(...previousposition);
    c.lineTo(...currentposition);
    c.stroke();
    c.closePath();
    previousposition = currentposition;
}
function onMouseup(event){
//console.log("mouseup", event.clientX, event.clientY);
    canvas.removeEventListener("mousemove", onMousemove);
}