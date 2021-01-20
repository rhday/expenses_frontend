class API{
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
        return fetch(accountURL).then(parseJSON)
    }
    fetchTransactions = () => {
        return fetch(transactionURL).then(parseJSON)
    }
    fetchAccount = (id) => {
        return fetch(this.accountURL + `/${id}`).then(parseJSON)
    }
    fetchTransaction = (id) => {
        return fetch(this.transactionURL + `/${id}`).then(parseJSON)
    }
    postTransaction = (accountId) => {
        return fetch(this.transactionURL, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({account_id: accountId})//do I need to add the fields in my schema relating to "Transaction?"
        }).then(parseJSON)
    }
    deleteTransaction = (id) => {
        return fetch(this.transactionURL + `/${id}`).then(parseJSON)
    }
}
