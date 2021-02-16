const api = new API()

api.fetchAccounts()
.then(data => {
    data.forEach(account => {
        tx = new Account(account)
        console.log(tx)
    })
})

const main = document.querySelector("main")
