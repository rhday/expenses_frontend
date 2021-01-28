class Account{ //name, balance and transactions
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.balance = data.balance
        this.renderAccount()

        data.transactions.forEach(traxData => {
            const trax = new Transaction(traxData, this)
            trax.account = this
            trax.renderTransaction()
        })
    }

    createTransaction = () => {
        const traxKind = this.kindSelect.value
        const traxAmount = this.amountInput.value
        const body = {account_id: 1, amount: traxAmount, kind: traxKind}
        api.postTransaction(body).then(traxData => {
            this.balanceHtml.innerHTML = traxData.account.balance
        const newTrax = new Transaction(traxData)
        newTrax.renderTransaction()  
        })
    }

    renderAccount = (data) => {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const ul = document.createElement("ul")
    this.balanceHtml = document.createElement("p")
    this.balanceHtml.setAttribute("data-id", this.id) 
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
    this.balanceHtml.innerHTML = this.balance
    button.setAttribute("data-account-id", this.id)
    button.innerHTML = "Add Transaction"
    button.addEventListener("click", this.createTransaction)

    div.appendChild(p)
    div.appendChild(this.balanceHtml)
    div.appendChild(this.amountInput)
    div.appendChild(this.kindSelect)
    this.kindSelect.appendChild(withdrawOption)
    this.kindSelect.appendChild(depositOption)
    div.appendChild(button)
    div.appendChild(ul)
    
    main.appendChild(div)

    }
}