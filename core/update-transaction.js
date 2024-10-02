/*
Updates a single transaction.

Transactions may change state along time.
If a transction state changes, we:

(1) Update the status of that transaction
(2) Write (log) to 'transactions-history' table what changed

This is to ensure full audit trail.
*/


// ------------------
// (2) Log the change/update

// PostgreSQL query to create a log entry to 'transactions-history' table




// ------------------
// (1) Update the status of this specific transaction

// PostgreSQL query to update the status in the 'transactions' table
