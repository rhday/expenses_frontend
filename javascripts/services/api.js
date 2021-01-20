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
        return this.url + 'api/v1/accounts'
    }
    get transactionURL() {
        return this.url + 'api/v1/transactions'
    }

    //Fetch Requests//
    fetchAccounts = () => {
        return fetch(accountURL).then(this.parseJSON)
    }
    fetchTransactions = () => {
        return fetch(transactionURL).then(this.parseJSON)
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
            body: JSON.stringify(object)//do I need to add the fields in my schema relating to "Transaction?"
        }).then(this.parseJSON)
    }//postTransaction(object){
    // object = account_id, amount, kind, date, description
    //}
    deleteTransaction = (id) => {
        return fetch(this.transactionURL + `/${id}`, {
            method: "DELETE", headers: this.headers
        }).then(this.parseJSON)
    }
}
