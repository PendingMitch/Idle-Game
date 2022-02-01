let files = [
    "js/global.js",
    "class/items.js",
    "class/upgrades.js",
    "class/autoclickers.js",
    "handlers/upgradeFunctions.js",
    "handlers/autoclickFuntions.js",
    "handlers/autoclickerhandling.js",
    "config.js",
    "js/datamanage.js",
    "js/script.js",
    "js/navigation.js"
]

function loadscript (file) {
    var script = document.createElement("script");
    script.src = file;
    script.async = true;
    document.body.appendChild(script);
    console.log('Loaded ' + file)
}



async function startUp() {
    // Load other JS Scripts
    for (let i = 0; i < files.length; i++) {
        loadscript(files[i])
        await sleep(200)
    }


    // Set loading screen hidden
    let loadingScreen = document.getElementById('loadingScreen')
    loadingScreen.classList.add('finished-view')
    await sleep(1000)
    loadingScreen.classList.add('finished')
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


loadscript('styles.js')
startUp()