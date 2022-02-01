let item_config = [
    {"name": "wires", "default": 0, "onclick": 1},
    {"name": "modules", "default": 0, "onclick": 1}
]

let upgrades_config = [
    {name: "AND Gate", price: [{"type":"wires", price: 50}, {"type": "modules", price: 5}], description: "Every time you click, you'll get another wire.", "function": "andGate", displayAt: 0},
    {name: "WHILE Loop", price: [{"type":"wires", price: 200}, {"type": "modules", price: 25}], description: "Get another wire every 5 seconds.", "function": "autoclickerBought", displayAt: [{"type":"wires", price: 50}, {"type": "modules", price: 5}]},
    {name: "OR Gate", price: [{"type":"wires", price: 500}, {"type": "modules", price: 100}], description: "Every time you click, you'll get another module.", "function": "orGate", displayAt: [{"type":"wires", price: 200}, {"type": "modules", price: 50}]},
    {name: "FOR Loop", price: [{"type":"wires", price: 750}, {"type": "modules", price: 250}], description: "Get another wire and another module every 10 seconds.", "function": "autoclickerBought", displayAt: [{"type":"wires", price: 500}, {"type": "modules", price: 100}]},
    {name: "NOT Gate", price: [{type:"wires", price: 5000}, {type: "modules", price: 2000}], description: "Multiply your clicks by two", "function": "notGate", displayAt: [{type: "wires", amount: 750}, {type: "modules", price: 250}]}
]


let autoclickers_config = [
    {name: "WHILE Loop", "function": autoclickWhileLoop, timeout: 5},
    {name: "FOR Loop", "function": autoclickForLoop, timeout: 10}
] 


console.log('Config Loaded')
