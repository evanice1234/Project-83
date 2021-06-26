var last_pos_x,last_pos_y;
color="black";
width_of_line=2;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
 
var width = screen.width;

new_width= screen.width - 70;
new_height= screen.height - 300;
if(width < 992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow= "hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    console.log("touchstart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    last_pos_x=e.touches[0].clientX-canvas.offsetLeft;
    last_pos_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
    console.log("touchmove");
    current_pos_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_pos_touch_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last_pos_x"+last_pos_x+"last_pos_y"+last_pos_y);
    ctx.moveTo(last_pos_x,last_pos_y);
    console.log("current_pos_touch_x"+current_pos_touch_x+"current_pos_touch_y"+current_pos_touch_y);
    ctx.lineTo(current_pos_touch_x,current_pos_touch_y);
    ctx.stroke();
    last_pos_x=current_pos_touch_x;
    last_pos_y=current_pos_touch_y;

}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
