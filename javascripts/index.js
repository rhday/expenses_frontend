const BASE_URL = "http://localhost:3000"
const ACCOUNT_URL = `${BASE_URL}/api/v1/accounts`
const TRANSACTION_URL = `${BASE_URL}/api/v1/transactions`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => loadAccounts())

const loadAccounts = () => {
    const ACCOUNT_URL = `${BASE_URL}/api/v1/accounts`
    fetch(ACCOUNT_URL)
    .then(res => res.json())
    .then(json => {
        json.forEach(account => renderAccount(account))
    })
}

const renderAccount = (accountHash) => {
    const div = document.createElement("div")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const ul = document.createElement("ul")

    div.setAttribute("class", "card")
    div.setAttribute("data-id", accountHash.id)
    p.innerHTML = accountHash.name
    button.setAttribute("data-account-id", accountHash.id)
    button.innerHTML = "Add Transaction"
    //button.addEventListener("click", createTransaction)

    div.appendChild(p)
    div.appendChild(button)
    div.appendChild(ul)

    main.appendChild(div)
    accountHash.transactions.forEach(transaction => renderTransaction(transaction))
}

const renderTransaction = (transaction) => {
    const ul = document.querySelector(`div[data-id="${transaction.account_id}"]`)
}