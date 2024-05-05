async function GoToLink(link,newTab) {
    if(!newTab) return window.location.href = link;
    window.open(link,"_blank");
}

async function FetchData(url, options = {}) {
    try {
        const response = await fetch(url,options);
        return await response.text();
    } catch (error) {
        console.error("There has been an error",error);
    }
}

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