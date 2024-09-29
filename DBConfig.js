const { Pool } = require('pg');
const itemsPool = new Pool({



    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }


/*  HACK 1 if above doesnt work

connectionString: process.env.DATABASE_URL || 'postgresql://sendd_user_test_01:Xrgz0o3crJg5vzH8LVxipzxNqBgbWwWD@dpg-crrvlvrtq21c73da6s0g-a.oregon-postgres.render.com/sendd_database_test_01',
    ssl: process.env.DATABASE_URL ? true : false

*/

/* HACK 2 if above doesnt work

    connectionString: 'postgresql://sendd_user_test_01:Xrgz0o3crJg5vzH8LVxipzxNqBgbWwWD@dpg-crrvlvrtq21c73da6s0g-a.oregon-postgres.render.com/sendd_database_test_01&ssl=true'

*/


});
module.exports = itemsPool;
