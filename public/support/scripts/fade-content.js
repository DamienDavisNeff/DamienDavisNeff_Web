window.addEventListener('load', function() {
    FadeContent(document.querySelector("#mainContent"))
  });

async function FadeContent(element) {
    element.style.display = ""; // Show the element
    setTimeout(() => {
        element.style.opacity = 1; // Fade in by changing opacity
    }, 15);
}
function FadeOutContent(element) {
    //
    // NEEDS WORK
    //
}