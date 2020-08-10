const fs = require('fs');

let getHomeData = (req, callback) => {
    console.log(req.url);
    fs.readFile('data/01.json', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data.toString());
    })
} 
let getHomeGoods = (req, callback) => {
    console.log(req.query);
    let type = req.query.type;
    let page = req.query.page;
    fs.readFile(`data/${type}/page${page}.json`, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, data.toString());
    })
} 

module.exports = {
    getHomeData,
    getHomeGoods
}
