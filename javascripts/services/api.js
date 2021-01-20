class API{
    //Constructor//
    constructor(port = 3000){
        this.url = `http://localhost:${port}`
    }

    //Getters//
    get accountURL() {
        return this.url + 'api/v1/accounts'
    }
    get transactionURL() {
        return this.url + 'api/v1/transactions'
    }

    //Fetch Requests//
    
}
