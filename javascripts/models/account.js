class Account{ //name, balance and transactions
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.balance = data.balance
        data.transactions.forEach(traxData => {
            const trax = new Transaction(traxData)
            trax.account = this
        })
    }
}