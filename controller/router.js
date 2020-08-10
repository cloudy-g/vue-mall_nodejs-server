const router = require('express').Router();
const {
    getHomeData,
    getHomeGoods
} = require('../model/fetchMethods');

router
    .get('/home/multidata', (req, res, next) => {
        getHomeData(req, (err, data) => {
            if (err) {
                next(err);
                return;
           }
           console.log(typeof data);
            res.send(data);
        })
    })
    .get('/home/goods', (req, res, next) => {
        getHomeGoods(req, (err, data) => {
            if (err) {
                next(err);
                return;
           }
            res.send(data);
        })
    })
    .use((req, res) => {
        res.send('404');
    })

module.exports = {
    router
};
