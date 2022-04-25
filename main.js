canvas = document.getElementById("myCanvas");
color = "blue";
ctx = canvas.getContext("2d");
width_of_line = 1;
var mouseEvent = "empty";
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
   color = document.getElementById("color").value;
   width_of_line = document.getElementById("width_of_line").value;

  
   
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if(mouseEvent == "mousedown")
{
   ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
      
    console.log("last position of x and y cordinate = ");
    console.log(" X = " + last_position_of_x + " ,Y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);

  console.log("current position of x and y cordinate = ");
    console.log(" X = " + current_position_of_mouse_x + " ,Y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
mouseEvent = "mouseup";
}
function clearArea()
{
    ctx.canvas.width(0,0,canvas.width,canvas.height);

}