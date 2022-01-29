function displayBroke() {
    let brokeInfo = document.getElementById('brokeInfo')
    console.log('You don\'t have enough items')
    brokeInfo.style.display = "flex"

    setTimeout(() => brokeInfo.style.display = "none", 1000)
}

function increaseAmountBought(name) {
    upgrades[name].bought()
    console.log("Bought a new " + name)
}

function queryAfford(price) {
    for (let i = 0; i < price.length; i++) {
        if(!(items[price[i].type].value() >= price[i].price)) {
            return false
        }
    }
    return true
}

function spendCost(cost) {
    for (let i = 0; i < cost.length; i++) {
        let current_item = items[cost.type]

        items[cost[i].type].setValue(items[cost[i].type].value() - cost[i].price)
    }
} 

function andGate(name, price) {
    if (queryAfford(price)) {
        items["wires"].setClickAmount(items["wires"].getClickAmount() + 2)
        spendCost(price)
        increaseAmountBought(name)
    } else {
        displayBroke()
    }
}

function orGate(name, price) {
    if (queryAfford(price)) {
        items["modules"].setClickAmount(items["modules"].getClickAmount() + 2)
        spendCost(price)
        increaseAmountBought(name)
    } else {
        displayBroke()
    }
}

function autoclickerBought(name, price) {
    if (queryAfford(price)) {
        spendCost(price)
        increaseAmountBought(name)
    } else {
        displayBroke()
    }
}