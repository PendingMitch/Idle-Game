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

let upgrades = []
class Upgrade {
    constructor(name, price, description, action) {
        this.plain_name = name
        this.name = localStorageUpgradePrefix + name
        this.price = price
        this.description = description
        

        this.createFunctionString(action)

        this.amount = 0 

        this.createDisplay()

        upgrades[name] = this
    }

    createFunctionString(action) {
        this.action = action + '("' + this.plain_name + '", ' + JSON.stringify(this.price) + ')'
    }

    createDisplay() {
        let div = document.createElement('div')
        let heading = document.createElement('h3')
        name = this.plain_name
        heading.innerHTML = name[0].toUpperCase() + name.substring(1)

        let desc = document.createElement('p')
        desc.innerHTML = this.description
        let amount = document.createElement('p')
        amount.innerHTML = 'Amount Owned: ' + this.amount

        let price = document.createElement('p')
        let price_string = "Price: "

        for (let i = 0; i < this.price.length; i++) {
            let curr_price = this.price[i]
            let curr_info = curr_price["price"] + ' ' + curr_price["type"]
            if (i == this.price.length - 1) {
                price_string = price_string + curr_info + "."
            } else {
                price_string = price_string + curr_info + ","
            }
        }

        price.innerHTML = price_string

        let button = document.createElement('button')
        button.innerHTML = 'Buy'
        
        button.setAttribute("onclick", this.action)
        button.setAttribute("class", 'btn')

        let displayInfo = document.getElementById('upgradeInfo')
        div.appendChild(heading)
        div.appendChild(desc)
        div.appendChild(amount)
        div.appendChild(price)
        div.appendChild(button)
        displayInfo.appendChild(div)


        this.elements = {}
        this.elements.price = price
        this.elements.button = button
        this.elements.amountBought = amount
    }

    updateDisplay() {

        let price_string = "Price: "

        for (let i = 0; i < this.price.length; i++) {
            let curr_price = this.price[i]
            let curr_info = curr_price["price"] + ' ' + curr_price["type"]
            if (i == this.price.length - 1) {
                price_string = price_string + curr_info + "."
            } else {
                price_string = price_string + curr_info + ","
            }
        }
        this.elements.price.innerHTML = price_string

        this.elements.amountBought.innerHTML = 'Amount Owned: ' + this.amount
    }

    bought() {
        this.amount = this.amount + 1
        this.updateDisplay()
    }

    reset() {
        this.amount = 0

        this.updateDisplay()
    }
}
