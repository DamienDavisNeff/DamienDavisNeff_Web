async function SetCanvasSize(ctx,size) {
    canvas.width = size[0];
    canvas.height = size[1];
    //
    console.log(
        "Window Size: ",
        [
            window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        ],
        "\nCanvas Size: ",
        [
            canvas.width,
            canvas.height
        ]
    );
}
async function FillCanvas(ctx,color) {
    console.log(`Canvas Color: ${color}`);
    ctx.fillStyle = color;
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

async function DrawCircle(ctx,radius,pos,color,stroke) {
    ctx.beginPath();
    ctx.arc(pos[0],pos[1],radius,0,2*Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = stroke["color"];
    ctx.lineWidth = stroke["width"];
    ctx.stroke();
}

async function ConvertToScreen(canvas,canvasCoordinates) {
    const canvasBounds = canvas.getBoundingClientRect();
    const screenCoordinates = [
        canvasCoordinates[0] - canvasBounds.left, 
        canvasCoordinates[1] - canvasBounds.top
    ];
    return screenCoordinates;
}
async function ConvertToCanvas(canvas,screenCoordinates) {
    const canvasBounds = canvas.getBoundingClientRect();
    const canvasCoordinates = [
        screenCoordinates[0] + canvasBounds.left,
        screenCoordinates[1] + canvasBounds.right
    ];
    return canvasCoordinates;
}