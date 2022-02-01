
for(let i = 0; i < item_config.length; i++) {
    new Item(item_config[i]["name"], item_config[i]["default"], item_config[i]["onclick"])
}

function resetData() {
    let items_keys = Object.keys(items)
    for (let i = 0; i < items_keys.length; i++) {
        let index = items_keys[i]
        items[index].reset()
    }

    let upgrades_keys = Object.keys(upgrades)
    for (let i = 0; i < upgrades_keys.length; i++) {
        let index = upgrades_keys[i]
        upgrades[index].reset()
    }

    dataLog('Reset Data')
}








for(let i = 0; i < upgrades_config.length; i++) {
    new Upgrade(upgrades_config[i]["name"], upgrades_config[i]["price"], upgrades_config[i]["description"], upgrades_config[i]["function"], upgrades_config[i]["displayAt"])
}

for(let i = 0; i < autoclickers_config.length; i++) {
    new autoClicker(autoclickers_config[i]["name"], autoclickers_config[i]["function"], autoclickers_config[i]["timeout"])
}

dataLog('Setup complete')