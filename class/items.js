let items = {}
class Item {
    constructor(name, default_value) {
        this.plain_name = name
        this.name = localStorageItemPrefix + name
        if (!localStorage.getItem(this.name)) {
            localStorage.setItem(this.name, 0)
        }
        this.default_value = default_value
        this.createDisplay()
        if (!localStorage.getItem(this.name+"click") || localStorage.getItem(this.name+"click") == undefined) {
            this.setClickAmount(1)
        }  
        items[name] = this
        console.log(this.name + ' was setup')
    }

    value() {
        return Number(localStorage.getItem(this.name))
    }

    setValue(number) {
        localStorage.setItem(this.name, number)
        this.changeElementNum()
    }

    add(number) {
        localStorage.setItem(this.name, this.value() + number)
        this.changeElementNum()


        let upgrade_keys = Object.keys(upgrades)
        for (let i = 0; i < upgrade_keys.length; i++) {
            upgrades[upgrade_keys[i]].display()
        }
    }

    reset() {
        this.setValue(this.default_value)
        this.setClickAmount(1)
    }

    setElement(element) {
        this.element = element
        this.changeElementNum()
    }

    changeElementNum() {
        this.element.innerHTML = this.value()
    }


    createDisplay() {
        let div = document.createElement('div')
        let heading = document.createElement('h3')
        name = this.plain_name
        heading.innerHTML = name[0].toUpperCase() + name.substring(1)

        let displayNumber = document.createElement('p')
        displayNumber.innerHTML = 0

        this.setElement(displayNumber)

        let displayInfo = document.getElementById('displayInfo')
        div.appendChild(heading)
        div.appendChild(displayNumber)
        displayInfo.appendChild(div)
    }

    setClickAmount(number) {
        localStorage.setItem(this.name+"click", number) 
    }

    getClickAmount() {
        return Number(localStorage.getItem(this.name+"click"))
    }
}


function returnItemsArray() {
    return items
}