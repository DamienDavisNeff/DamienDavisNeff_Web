function CalculateRandom(min,max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function ReadSVGData(filepath) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET",filepath,false);
    xhr.send(null);
    if(xhr.status != 200) throw new Error(`Failed to load SVG file: ${filePath}`);
    return xhr.responseText;
}