let cssFiles = [
    "main/style.css",
    "main/buttons.css",
    "main/displayInfo.css",
    "main/resetData.css",
    "main/upgradeInfo.css",

    
    "mobile/brokeInfo.css",
    "mobile/displayInfo.css",
    "mobile/upgradeInfo.css",
    "mobile/buttons.css",
]

function loadStyle(file) {
    var style = document.createElement("link");
    let href = 'styles/' + file
    style.href = href;
    style.rel = 'stylesheet';
    style.type = 'text/css';

    document.body.appendChild(style);
    console.log('Loaded CSS  ' + href)
}

async function startCSS() {
    for (let i = 0; i < cssFiles.length; i++) {
        loadStyle(cssFiles[i])
    }
}
startCSS()