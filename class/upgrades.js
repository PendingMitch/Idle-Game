let upgrades = []
class Upgrade {
    constructor(name, price, description, action) {
        this.plain_name = name
        this.name = localStorageUpgradePrefix + name
        this.price = price
        this.description = description
        

        this.createFunctionString(action)
        this.getAmount()

        this.createDisplay()
        this.updateDisplay()
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
        amount.innerHTML = 'Amount Owned: ' + this.getAmount()

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

        this.elements.amountBought.innerHTML = 'Amount Owned: ' + this.getAmount()
    }

    bought() {
        this.setAmount(this.getAmount() + 1)
        this.updateDisplay()
    }

    getAmount() {
        let amount = 0
        if (localStorage.getItem(this.name+'amount') && localStorage.getItem(this.name+'amount') != undefined ) {
            amount = localStorage.getItem(this.name+'amount')
        } else {
            this.setAmount(this.amount)
        }
        return Number(amount)
    }

    setAmount(number) {
        localStorage.setItem(this.name+'amount', number)
    }

    reset() {
        this.setAmount(0)
        this.updateDisplay()
    }
}