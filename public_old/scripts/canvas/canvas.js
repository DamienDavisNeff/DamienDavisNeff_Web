async function SetCanvasSize(canvas,size) {
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
async function FillCanvas(canvas,color) {
    const ctx = canvas.getContext('2d');
    console.log(`Canvas Color: ${color}`);
    ctx.fillStyle = color;
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

//
// Somewhat Advanced Functions
async function RenderSVG(ctx,svg,position) {
    // const ctx = canvas.getContext('2d');
    const DOMURL = window.url || window.webkitURL || window;
    const img = new Image();
    const svgBlob = new Blob([svg], {
        type:"image/svg+xml;charset=utf-8"
    });
    const url = DOMURL.createObjectURL(svgBlob);

    img.onload = function() {
        ctx.drawImage(img,position[0],position[1]);
        DOMURL.revokeObjectURL(url);
    };
    img.src = url;
}
//

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