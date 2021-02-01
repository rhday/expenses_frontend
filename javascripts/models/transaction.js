class Transaction{ //account_id, amount, kind, date, description ///does this need a transaction ID too?

    constructor(data, account) {
        this.id = data.id
        this.account_id = data.account_id
        this.amount = data.amount
        this.kind = data.kind
        this.date = data.date
        this.description = data.description
        this.account = account
    }

    renderTransaction() {
        const ul = document.querySelector(`div[data-id="${this.account_id}"]`)
        const li = document.createElement("li")
        const button = document.createElement("button")

        li.innerHTML = `${this.amount} (${this.kind})`
        button.setAttribute("class", "delete")
        button.setAttribute("data-this-id", this.id)
        button.innerHTML = "Delete!"
        button.addEventListener("click", this.delete)

        li.appendChild(button)
        ul.appendChild(li)
        
    }

    delete = (event) => {
        const api = new API
        event.target.parentNode.remove()
        api.deleteTransaction(this.id)
        const p = document.querySelector(`p[data-id="${this.account_id}"]`)//grabbing specific p tag based on its data id
        if (this.kind === "deposit"){
            this.account.balance -= this.amount
        } 
        else {
            this.account.balance += this.amount
        } 
        p.innerHTML = this.account.balance
    }
}