class API {

    //Constructor//
    constructor(port = 3000){
        this.url = `http://localhost:${port}`
    }

    //Helpers//
    parseJSON = response => response.json()

    headers = {"Accepts": "application/json", "Content-Type": "application/json"}

    //Getters//
    get accountURL() {
        return this.url + '/api/v1/accounts'
    }
    get transactionURL() {
        return this.url + '/api/v1/accounts/1/transactions'//how do I make this dynamic?
    }

    //Fetch Requests//
    fetchAccounts = () => {
        return fetch(this.accountURL).then(this.parseJSON)
    }
    fetchTransactions = () => {
        return fetch(this.transactionURL).then(this.parseJSON)
    }
    fetchAccount = (id) => {
        return fetch(this.accountURL + `/${id}`).then(this.parseJSON)
    }
    fetchTransaction = (id) => {
        return fetch(this.transactionURL + `/${id}`).then(this.parseJSON)
    }
    postTransaction = (object) => {
        return fetch(this.transactionURL, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(object)
        }).then(this.parseJSON)
    }//postTransaction(object){
    // object = account_id, amount, kind, date, description
    //}
    deleteTransaction = (id) => {
        return fetch(this.transactionURL + `/${id}`, {
            method: "DELETE", 
            headers: this.headers
        }).then(this.parseJSON)
    }
}
