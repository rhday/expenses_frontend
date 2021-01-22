class Account{ //name, balance and transactions
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.balance = data.balance
        this.renderAccount()

        data.transactions.forEach(traxData => {
            const trax = new Transaction(traxData)
            trax.account = this
            trax.renderTransaction()
        })
    }

    createTransaction = () => {
        api.postTransaction(this.id).then(traxData => new Transaction(traxData))
    }

    renderAccount = (data) => {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const ul = document.createElement("ul")

    div.setAttribute("class", "card")
    div.setAttribute("data-id", this.id)
    p.innerHTML = this.name
    button.setAttribute("data-account-id", this.id)
    button.innerHTML = "Add Transaction"
    button.addEventListener("click", this.createTransaction)

    div.appendChild(p)
    div.appendChild(button)
    div.appendChild(ul)

    main.appendChild(div)
    //this.transactions.forEach(transaction => renderTransaction(transaction))

    }
}