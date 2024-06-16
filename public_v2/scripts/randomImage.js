const images = [
    "/images/Photos/Forehead Smack.JPEG", 
    "/images/Photos/July 4th 1.JPEG",
    "/images/Photos/July 4th 2.JPEG",
    "/images/Photos/Walk.JPEG",
    "/images/Photos/Wall.JPEG"
];
const randomValues = [
    0,
    images.length-1,
]

const chosenIndex = CalculateRandom(randomValues[0],randomValues[1]);
const chosenImage = images[chosenIndex];
var loadedImage = new Image();
loadedImage.src = chosenImage;
loadedImage.onload = () => {
    var randomImage = document.getElementById("introductionImage");
    randomImage.src = chosenImage;
    randomImage.style.opacity = 1;
}