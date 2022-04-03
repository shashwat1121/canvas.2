var last_position_of_x , last_position_of_y;
color = "black" ;
width_of_line = 2;

canvas = document.getElementById( 'my Canvas' );
ctx = canvas.getContext("2d");

var width = screen.width;

new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventlistener("touchstart , my_touchstart");

function my_touchstart(e)
{
    console.log("my_touchstart");

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

current_position_of_touch_x= e.touches[0].clientx - canvas.offsetleft;
current_position_of_touch_y= e.touches[0].clienty - canvas.offsetTop;

}

canvas.addEventlistener("touchmove , my_touchmove");

function my_touchmove(e)
{
    console.log("my_touchmove");
    current_position_of_x = e.touches[0].clientx - canvas.offsetleft;
    current_position_of_y = e.touches[0].clienty - canvas.offsettop;

    ctx.beginpath();
    ctx.stokestyle= color;
    ctx.linewidth = width_of_line;

    console.log("last position of x and y coordinates = ");
    console.log("x= " + current_position_of_touch_x + "y="+ current_position_of_touch_y);
    ctx.moveTo(last_position_of_touch_x , current_position_of_touch_y);
    ctx.stroke();

last_position_of_x = current_position_of_touch_x;
last_position_of_y = current_position_of_touch_y;
}
