let autoClickers = []
class autoClicker {
    constructor(name, action, timeout) {
        this.plain_name = name
        this.timeout = timeout
        this.curr_timeout = timeout

        this.action = action

        autoClickers[name] = this
    }

    getAmount() {
        this.amount = Number(upgrades[this.plain_name].getAmount())
        return this.amount
    }

    passTime() {
        if (this.curr_timeout <= 0) {
            this.curr_timeout = this.timeout
        } else {
            this.curr_timeout = this.curr_timeout - 1
        }
    }
}