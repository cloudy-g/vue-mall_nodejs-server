let express = require('express');
let cors = require('cors');
let {router} = require('./controller/router');

let app = express();

app.use(cors());

app
    .use(router)
    .listen(3000, () => {
        console.log('http://127.0.0.1:3000');
    })
