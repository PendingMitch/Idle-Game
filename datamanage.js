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

    dataLog('Reset Data')
}




let upgrades_info = [
    {name: "AND Gate", price: [{"type":"wires", price: 50}, {"type": "modules", price: 5}], description: "Every time you click, you'll get another wire.", "function": "andGate", displayAt: 0},
    {name: "WHILE Loop", price: [{"type":"wires", price: 200}, {"type": "modules", price: 25}], description: "Get another wire every 5 seconds.", "function": "autoclickerBought", displayAt: [{"type":"wires", price: 50}, {"type": "modules", price: 5}]},
    {name: "OR Gate", price: [{"type":"wires", price: 500}, {"type": "modules", price: 100}], description: "Every time you click, you'll get another module.", "function": "orGate", displayAt: [{"type":"wires", price: 200}, {"type": "modules", price: 50}]},
    {name: "FOR Loop", price: [{"type":"wires", price: 750}, {"type": "modules", price: 250}], description: "Get another wire and another module every 10 seconds.", "function": "autoclickerBought", displayAt: [{"type":"wires", price: 500}, {"type": "modules", price: 100}]},
    {name: "NOT Gate", price: [{type:"wires", price: 5000}, {type: "modules", price: 2000}], description: "Multiply your clicks by two", "function": "notGate", displayAt: [{type: "wires", amount: 750}, {type: "modules", price: 250}]}
]



for(let i = 0; i < upgrades_info.length; i++) {
    new Upgrade(upgrades_info[i]["name"], upgrades_info[i]["price"], upgrades_info[i]["description"], upgrades_info[i]["function"], upgrades_info[i]["displayAt"])
}

let autoclickers_info = [
    {name: "WHILE Loop", "function": autoclickWhileLoop, timeout: 5},
    {name: "FOR Loop", "function": autoclickForLoop, timeout: 10}
] 

for(let i = 0; i < autoclickers_info.length; i++) {
    new autoClicker(autoclickers_info[i]["name"], autoclickers_info[i]["function"], autoclickers_info[i]["timeout"])
}

dataLog('Setup complete')


