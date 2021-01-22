class Transaction{ //account_id, amount, kind, date, description ///does this need a transaction ID too?
    constructor(data) {
        this.data = data.id
        this.account_id = data.account_id
        this.amount = data.amount
        this.kind = data.kind
        this.date = data.date
        this.description = data.description
    }
    
    delete = () => {
            
    }
}