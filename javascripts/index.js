const BASE_URL = "http://localhost:3000"
const ACCOUNT_URL = `${BASE_URL}/api/v1/accounts`
const TRANSACTION_URL = `${BASE_URL}/api/v1/transactions`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => loadAccounts())