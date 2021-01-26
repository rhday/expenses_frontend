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

    createTransaction = (api) => {
        this.kindSelect 
        api.postTransaction(this.id).then(traxData => {
        const newTrax = new Transaction(traxData)  
        })/// do I need to make an "account-card.js" like in your video to be able to then add new transactions? How can I make user input fields appear to then link to the transaction button?
    }

    renderAccount = (data) => {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const ul = document.createElement("ul")
    const balance = document.createElement("p")
    this.amountInput = document.createElement("INPUT")
    this.amountInput.type = "number"
    this.kindSelect = document.createElement("SELECT")
    const withdrawOption = document.createElement("OPTION")
    withdrawOption.innerHTML = "Withdraw"
    withdrawOption.value = "withdraw"
    const depositOption = document.createElement("OPTION")
    depositOption.innerHTML = "Deposit"
    depositOption.value = "deposit"

    div.setAttribute("class", "card")
    div.setAttribute("data-id", this.id)
    p.innerHTML = this.name
    balance.innerHTML = this.balance
    button.setAttribute("data-account-id", this.id)
    button.innerHTML = "Add Transaction"
    button.addEventListener("click", this.createTransaction)

    div.appendChild(p)
    div.appendChild(this.amountInput)
    div.appendChild(this.kindSelect)
    this.kindSelect.appendChild(withdrawOption)
    this.kindSelect.appendChild(depositOption)
    div.appendChild(button)
    div.appendChild(ul)
    div.appendChild(balance)
    

    main.appendChild(div)
    //this.transactions.forEach(transaction => renderTransaction(transaction))

    }
}