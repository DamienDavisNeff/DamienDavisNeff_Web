var canvas = document.getElementById("background");
var ctx = canvas.getContext("2d");
const defaultBackground = "red";

window.onload = function() {
    SetCanvasSize(
        ctx,
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    );
    FillCanvas(ctx,defaultBackground);
}
window.addEventListener("resize", function() {
    SetCanvasSize(
        ctx,
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    );
    FillCanvas(ctx,defaultBackground);
});

setInterval(() => {
    const rgb = [
        255,
        0,
        0
    ]
    // FillCanvas(ctx,`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);
}, 1000);