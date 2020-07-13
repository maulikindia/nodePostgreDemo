
let pg = require('pg')
let pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'users',
    password: 'mj123bhalala007',
    port: 5432,
}, async (err) => {
    if (!err) {
        console.log('db ok');
    }
});


module.exports = pool;