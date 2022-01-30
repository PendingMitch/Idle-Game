let upgrades = []
class Upgrade {
    constructor(name, price, description, action, displayAt) {
        this.plain_name = name
        this.name = localStorageUpgradePrefix + name
        this.price = price
        this.description = description
        

        this.createFunctionString(action)
        this.getAmount()
        this.displayAt = displayAt
        this.display()
        
        upgrades[name] = this
    }

    createFunctionString(action) {
        this.action = action + '("' + this.plain_name + '", ' + JSON.stringify(this.price) + ')'
    }

    display() {
        if (this.isDisplayed() == true && this.alreadyDisplayed != true) {
            this.createDisplay()
            this.updateDisplay()
        }
    }

    createDisplay() {
        this.isDisplayed(true)
        upgradeLog('Added item to upgrade list: ' + this.plain_name)
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
        this.elements.main = div
        this.elements.price = price
        this.elements.button = button
        this.elements.amountBought = amount
    }

    removeDisplay() {
        if (this.elements && this.elements.main) {
            this.elements.main.remove()
        }
        this.elements = {}
        
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

    isDisplayed(bool) {
        bool = bool ?? "NotABool"
        if (bool != "NotABool") {
            localStorage.setItem(localStorageUpgradePrefix + '_isDisplayed_' + this.plain_name, bool)
            if (bool == false) {
                this.removeDisplay()
            }
            this.alreadyDisplayed = bool == true
        } else {
            if (this.displayAt == 0) {
                localStorage.setItem(localStorageUpgradePrefix + '_isDisplayed_' + this.plain_name, true)
            } else {
                bool = true
                for (let i = 0; i < this.displayAt.length; i++) {
                    let item = this.displayAt[i]
                    if (items[item.type].value() < item.price) {
                        bool = false
                    }
                }
                localStorage.setItem(localStorageUpgradePrefix + '_isDisplayed_' + this.plain_name, bool)
            }
        }

        let boolean_returned = localStorage.getItem(localStorageUpgradePrefix + '_isDisplayed_' + this.plain_name) == 'true'
        return boolean_returned
        
    }

    bought() {
        this.setAmount(this.getAmount() + 1)
        this.updateDisplay()
    }

    getAmount() {
        let amount = 0
        
        if (localStorage.getItem(this.name+'amount') && localStorage.getItem(this.name+'amount') != undefined) {
            amount = localStorage.getItem(this.name+'amount')
        } else {
            this.setAmount(amount)
        }
        return Number(amount)
    }

    setAmount(number) {
        number = Number(number)
        if (number != NaN) {
            localStorage.setItem(this.name+'amount', number)
            if(autoClickers[this.name]) {
                autoClickers[this.name].getAmount()
            }
        }
    }

    reset() {
        this.setAmount(0)
        this.isDisplayed(false)
        this.display()
    }
}