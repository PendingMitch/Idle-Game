function newItem(name) {
    return new item(name)
}

function wireClick() {
    items["wires"].add(items["wires"].getClickAmount()) 
}

function modulesClick() {
    items["modules"].add(items["modules"].getClickAmount())
}