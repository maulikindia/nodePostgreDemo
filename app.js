let express = require('express');
let app = express();


let bodyPaser = require('body-parser');
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

let morgan = require('morgan');
app.use(morgan('dev'));


let users = require('./routes/userRoutes');
app.use('/user',users);

let port = 5900;
app.listen(port, async (err) => {
    console.log(`Server is running on : ${port}`);
});