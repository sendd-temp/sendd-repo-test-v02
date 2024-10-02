/*
Creates a single transaction.

A "transaction" can represent anything, for example:

- "Transfer" of asset
- "Conversion" between assets
- "Charging" a fee
- Etc

However, it simply is a row in database with mandatory fields of:
- From
- To
- Asset
- Amount

Transactions may change state along time.
If a transction state changes, we:

(1) Update the status of that transaction
(2) Write (log) to 'transactions-history' table what changed

This is to ensure full audit trail.

The database table of transactions is the single source of truth of all balances for all accounts (per asset).
The transactions table is the ultimate "ledger".

*/



// -----------------
// PostgreSQL query to create (insert) a single transaction to the 'transactions' table

