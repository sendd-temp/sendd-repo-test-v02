// const { Pool } = require('pg');
import pg from 'pg';
const { Pool } = pg;

import dotenv from 'dotenv';
dotenv.config();


//const connectionstring = process.env.DATABASE_URL;
//const connectionstring = "postgresql://sendd_user_test_01:Xrgz0o3crJg5vzH8LVxipzxNqBgbWwWD@dpg-crrvlvrtq21c73da6s0g-a.oregon-postgres.render.com/sendd_database_test_01?ssl=true"


const itemsPool = new Pool({
    

    
    connectionString: process.env.DATABASE_URL,
    //connectionString: connectionstring,

    ssl: {
        //require: true,
        rejectUnauthorized: false
    }

//ssl: process.env.DATABASE_SSL === 'true'
//ssl:true
// ssl: process.env.DATABASE_URL ? true : false

/*  HACK 1 if above doesnt work

connectionString: process.env.DATABASE_URL || 'postgresql://sendd_user_test_01:Xrgz0o3crJg5vzH8LVxipzxNqBgbWwWD@dpg-crrvlvrtq21c73da6s0g-a.oregon-postgres.render.com/sendd_database_test_01',
    ssl: process.env.DATABASE_URL ? true : false

*/

/* HACK 2 if above doesnt work

    connectionString: 'postgresql://sendd_user_test_01:Xrgz0o3crJg5vzH8LVxipzxNqBgbWwWD@dpg-crrvlvrtq21c73da6s0g-a.oregon-postgres.render.com/sendd_database_test_01&ssl=true'

*/


});

console.log(dotenv);
console.log(itemsPool);

//module.exports = itemsPool;
export default itemsPool;


