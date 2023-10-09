var canvas = document.getElementById("background");
var ctx = canvas.getContext("2d");

const defaultBackground = "red";
var screenSize = [
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
];

window.onload = function() {
    screenSize = [
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    ];
    SetDefault();
}
window.addEventListener("resize", function() {
    screenSize = [
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    ];
    SetDefault();
});


async function SetDefault() {
    SetCanvasSize(
        canvas,
        screenSize
    );
    FillCanvas(canvas,defaultBackground);
}

//

const targetFPS = 1;
// Draw Loop
setInterval(() => {
    FillCanvas(canvas,defaultBackground);
    // not working yet RenderSVG(ctx,RenderSVG("temp/logo.svg"),[0,0]);
},1000/targetFPS);
/*
setInterval(() => {
    FillCanvas(canvas,`#${CalculateRandom(100000,999999)}`);
}, 1000/targetFPS);
*/