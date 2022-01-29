let data = [
    {"name": "wires", "default": 0, "onclick": 1},
    {"name": "modules", "default": 0, "onclick": 1}
]
for(let i = 0; i < data.length; i++) {
    new Item(data[i]["name"], data[i]["default"], data[i]["onclick"])
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

    console.log('Reset Data')
}




let upgrades_info = [
    {"name": "AND Gate", "price": [{"type":"wires", "price": 50}, {"type": "modules", "price": 1}], "description": "Get another wire to be able to send your data onto.", "function": "andGate"}
]



for(let i = 0; i < upgrades_info.length; i++) {
    new Upgrade(upgrades_info[i]["name"], upgrades_info[i]["price"], upgrades_info[i]["description"], upgrades_info[i]["function"])
}

console.log('Setup complete')