const localStorageItemPrefix = "PendingMitchIdleGame_"
const localStorageUpgradePrefix = "PendingMitchIdleGame_Upgrade_"

function autoClickLog(txt) {
    console.log('%c'+txt, "color:green;")
}

function upgradeLog(txt) {
    console.log('%c'+txt, "color:aqua;")
}

function dataLog(txt) {
    console.log('%c'+txt, "color:red;")
}


const header = document.getElementById('displayInfo')
window.onscroll = function () {
    let header_position = window.getComputedStyle(header).getPropertyValue('position')
    if (header_position == "sticky") {
        var top = window.scrollY;
        if (top >= 60) {
            header.classList.remove('not_scrolled')
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
            header.classList.add('not_scrolled')
        }
    }
}
