const introductionImages = [
    "/images/Photos/Forehead Smack.jpg", 
    "/images/Photos/July 4th 1.jpg",
    "/images/Photos/July 4th 2.jpg",
    "/images/Photos/Walk.jpg",
    "/images/Photos/Wall.jpg"
];
const thumbnailImages = [
    "/images/Thumbnails/Chapter 1/Ransom.jpg",
    "/images/Thumbnails/Chapter 1/Did It Again.jpg",
    "/images/Thumbnails/Chapter 1/Silence SMG.jpg",
    "/images/Thumbnails/Chapter 2/Righteous Alt.jpg",
    "/images/Thumbnails/Chapter 4/Chapter 4 Duos 1.jpg",
    "/images/Thumbnails/Chapter 4/Chapter 4 FNCS 2.jpg",
    "/images/Thumbnails/Grand Theft Auto/Unstoppable.webp",
];
const bannerImages = [
    "/images/Banners/Fade/Twitter.jpg",
    "/images/Banners/Spiro/Twitter.jpg",
    "/images/Banners/TMoose/Twitter.jpg",
    "/images/Banners/YaGami/Twitter.webp",
]

PickRandomImage(introductionImages,[document.getElementById("introductionImage")]);
PickRandomImage(thumbnailImages,document.getElementsByClassName("preview-images-item-picker"));
PickRandomImage(bannerImages,document.getElementsByClassName("preview-images-item-picker-banner"));

function _PickRandomImage(images,source) {
    // OLD VERSION OF FUNCTION; ONLY WORKS WITH ONE SOURCE
    const randomValues = [
        0,
        images.length-1,
    ];
    const chosenIndex = CalculateRandom(randomValues[0],randomValues[1]);
    const chosenImage = images[chosenIndex];
    var loadedImage = new Image();
    loadedImage.src = chosenImage;
    loadedImage.onload = () => {
        var randomImage = source;
        randomImage.src = chosenImage;
        randomImage.style.opacity = 1;
    }
    return chosenIndex;
}

function PickRandomImage(images, sources) {
    
    var _images = images;
    var _sources = [];

    for(let a = 0; a < sources.length; a++) {
        if(Array.from(sources[a].classList).includes("skip-random")) continue;
        _sources.push(sources[a]);
    }

    for(let a = 0; a < _sources.length; a++) {

        const randomValues = [
            0,
            _images.length-1
        ]

        const chosenIndex = CalculateRandom(randomValues[0],randomValues[1]);
        const chosenImage = _images[chosenIndex];

        var loadedImage = new Image();
        loadedImage.src = chosenImage;
        loadedImage.onload = () => {
            var randomImage = _sources[a];
            randomImage.src = chosenImage;
            randomImage.style.opacity = 1;
        }

        var __images = [];
        for(let b = 0; b < _images.length; b++) {
            if(b != chosenIndex) __images.push(_images[b]);
        }
        _images = __images;

    }

}

function DuplicateImage(source,final) {
    const newSource = source.src;
    final.src = newSource;
    final.style.opacity = 1;
}

function OnImageClick(previewSlot,previewClicked) {
    _previewSlot = previewSlot.src;
    _previewClicked = previewClicked.src;
    previewSlot.style.opacity = 0;
    previewClicked.style.opacity = 0;
    setTimeout(() => {
        previewSlot.src = _previewClicked;
        previewClicked.src = _previewSlot;
        previewSlot.style.opacity = 1;
        previewClicked.style.opacity = 1;
    }, 125);
}