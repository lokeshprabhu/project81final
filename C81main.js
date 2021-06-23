canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
colour = "red";

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 2;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(350, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(450, 210, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(300, 250, 40, 0, 2 * Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 2;
ctx.arc(400, 250, 40, 0, 2 * Math.PI);
ctx.stroke();








function clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}