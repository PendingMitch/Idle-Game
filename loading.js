let files = [
    "global.js",
    "class/items.js",
    "class/upgrades.js",
    "class/autoclickers.js",
    "handlers/upgradeFunctions.js",
    "handlers/autoclickFuntions.js",
    "handlers/autoclickerhandling.js",
    "datamanage.js",
    "script.js",
    "navigation.js"
]


/*
<script src="global.js"></script>
    <script src="upgradeFunctions.js"></script>
    <script src="autoclickFuntions.js"></script>
    <script src="autoclickerhandling.js"></script>
    <script src="class/items.js"></script>
    <script src="class/upgrades.js"></script>
    <script src="class/autoclickers.js"></script>
    <script src="datamanage.js"></script>
    <script src="script.js"></script>

*/

function loadscript (file) {
    var script = document.createElement("script");
    script.src = file;
    script.async = true;
    document.body.appendChild(script);
    console.log('Loaded ' + file)
}



async function startUp() {
    for (let i = 0; i < files.length; i++) {
        loadscript(files[i])
        await sleep(100)
    }

    let loadingScreen = document.getElementById('loadingScreen')
    loadingScreen.classList.add('finished-view')
    await sleep(1000)
    loadingScreen.classList.add('finished')
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


startUp()