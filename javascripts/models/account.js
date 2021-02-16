class Account{ //name, balance and transactions

    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.balance = data.balance
        this.renderAccount(data)

        data.transactions.forEach(traxData => {
            const trax = new Transaction(traxData, this)
            trax.account = this
            trax.renderTransaction()
        })
    }

    createTransaction = () => {
        const traxKind = this.kindSelect.value
        const traxAmount = this.amountInput.value
        const traxDescription = this.descriptionInput.value
        const body = {account_id: 1, amount: traxAmount, kind: traxKind, description: traxDescription}
        api.postTransaction(body).then(traxData => {
            this.balance = traxData.account.balance //assigning the account balance associated to the traxData to the variable "this.balance"
            this.balanceHtml.innerHTML = traxData.account.balance
        const newTrax = new Transaction(traxData, this)
        newTrax.renderTransaction()  
        }).catch(() => alert("Insufficient funds!"))
    }
    
    renderWithdrawals = (data) => {
        const ul = document.querySelector(`div[data-id="${this.id}"] ul`)
        ul.innerHTML = ""
        data.transactions.filter(transaction => transaction.kind === "withdraw" ).forEach(traxData => {
            const trax = new Transaction(traxData, this)
            trax.account = this
            trax.renderTransaction("withdraw")
        })
    }

    renderAccount = (data) => {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const ul = document.createElement("ul")
    const buttonTwo = document.createElement("button")
    const buttonThree = document.createElement("button")
    const buttonFour = document.createElement("button")
    this.balanceHtml = document.createElement("p")
    this.balanceHtml.setAttribute("data-id", this.id) 
    this.amountInput = document.createElement("INPUT")
    this.amountInput.type = "number"
    this.amountInput.min = "0" //This will stop the user from inputting a negative value/float
    this.amountInput.placeholder = "Amount:" 
    this.descriptionInput = document.createElement("INPUT")
    this.descriptionInput.type = "text"
    this.descriptionInput.placeholder = "Description:"
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
    this.balanceHtml.innerHTML = this.balance
    button.setAttribute("data-account-id", this.id)
    button.innerHTML = "Add Transaction"
    button.addEventListener("click", this.createTransaction)

    buttonTwo.setAttribute("data-account", this)
    buttonTwo.innerHTML = "See Withdrawals"
    buttonTwo.addEventListener("click", () => this.renderWithdrawals(data))
    
    div.appendChild(buttonTwo)
    div.appendChild(p)
    div.appendChild(this.balanceHtml)
    div.appendChild(this.amountInput)
    div.appendChild(this.descriptionInput)
    div.appendChild(this.kindSelect)
    this.kindSelect.appendChild(withdrawOption)
    this.kindSelect.appendChild(depositOption)
    div.appendChild(button)
    div.appendChild(ul)
    
    main.appendChild(div)

    }
}