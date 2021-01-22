const api = new API()

api.fetchAccounts()
.then(data => {
    data.forEach(account => {
        tx = new Account(account)
        console.log(tx)
    })
})

const main = document.querySelector("main")

//const renderAccount = (accountHash) => {
//    const div = document.createElement("div")
//    const p = document.createElement("p")
//    const button = document.createElement("button")
//    const ul = document.createElement("ul")

//    div.setAttribute("class", "card")
//    div.setAttribute("data-id", accountHash.id)
//    p.innerHTML = accountHash.name
//    button.setAttribute("data-account-id", accountHash.id)
//    button.innerHTML = "Add Transaction"
    //button.addEventListener("click", createTransaction)

//    div.appendChild(p)
//    div.appendChild(button)
//    div.appendChild(ul)

//    main.appendChild(div)
//    accountHash.transactions.forEach(transaction => renderTransaction(transaction))
//}
