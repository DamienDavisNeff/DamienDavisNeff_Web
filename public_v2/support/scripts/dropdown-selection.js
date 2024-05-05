const projectSelection = document.getElementById("projectSelection");
var currentProject = projectSelection.value;

function UpdateOption() {
    console.log(`Current Selected Option Is: ${currentProject}`);
    currentProject = projectSelection.value;
    const messages = document.querySelectorAll("#message");
    messages.forEach(element => {
        element.style.display = "none";
        element.style.opacity = 0;
    });
    for(let a = 0; a < messages.length; a++) {
        const messageContent = messages[a].getAttribute("type");
        console.log(`Checking ${messageContent}`);
        if(messageContent != currentProject) {
            console.log(`${messageContent} is not the currently selected option`);
            continue;
        } else {
            console.log(`${messageContent} is the currently selected option`);
            FadeContent(messages[a]);
            break;
        };
    }
}

projectSelection.addEventListener("change", function() {
    UpdateOption();
});

UpdateOption();