class Transaction{ //account_id, amount, kind, date, description ///does this need a transaction ID too?

    constructor(data) {
        this.data = data.id
        this.account_id = data.account_id
        this.amount = data.amount
        this.kind = data.kind
        this.date = data.date
        this.description = data.description
    }

    renderTransaction() {
        const ul = document.querySelector(`div[data-id="${this.account_id}"]`)
        const li = document.createElement("li")
        const button = document.createElement("button")

        li.innerHTML = `${this.amount} (${this.kind})`
        button.setAttribute("class", "release")
        button.setAttribute("data-this-id", this.id)
        button.innerHTML = "Delete!"
        button.addEventListener("click", this.delete)

        li.appendChild(button)
        ul.appendChild(li)
    }

    delete = () => {
            
    }
}