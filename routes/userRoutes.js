let expres = require('express');
let router = expres.Router();
let pool = require('../config/db');



//get dat from postgres db
router.get('/', async (req, res) => {
    let q = 'select *from userInfo';
    pool.query(q, async (err, respo) => {
        if (err) {
            return res.json({ status: false, msg: err, data: [] });
        }
        else if (respo.rows !== null) {
            return res.json({ status: true, msg: '', data: respo.rows });
        }
    })

});


//post data to postgres db
router.post('/', async (req, res) => {
    let name1 = req.body.name;
    let email1 = req.body.email;
    let password1 = req.body.password;

    let q = 'insert into  userInfo(name,email,password) values ($1,$2,$3) RETURNING *';
    pool.query(q, [name1, email1, password1], async (err, respo) => {
        if (err) {
            return res.json({ status: false, msg: err, data: [] });
        }
        else if (respo.rows !== null) {
            return res.json({ status: true, msg: '', data: respo.rows });
        }
    });
});



//update data to postgres db
router.put('/', async (req, res) => {
    let name = req.body.name;
    let email1 = req.query.email;
    let password1 = req.body.password;

    let q = 'update  userInfo  SET name=$1,password=$2 where email=$3 RETURNING *';
    pool.query(q, [name, email1, password1], async (err, respo) => {
        if (err) {
            return res.json({ status: false, msg: err, data: [] });
        }
        else if (respo.rows !== null) {
            return res.json({ status: true, msg: '', data: respo.rows });
        }
    });
});

module.exports = router;