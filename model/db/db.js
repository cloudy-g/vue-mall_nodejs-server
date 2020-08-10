let axios = require('axios')

let { BannerList, 
    DkeywordList,
    KeywordsList,
    RecommendList  
} = require('./dbmodel');

axios
    .get('http://123.207.32.32:8000/home/multidata')
    .then(res => {
        let bannerList = res.data.data.banner.list;
        let dkeywordList = res.data.data.dKeyword.list;
        let keywordsList = res.data.data.keywords.list;
        let recommendList = res.data.data.recommend.list;
        
        bannerList.forEach(element => {
            new BannerList(element).save(err => console.log(err));
        }); 
        dkeywordList.forEach(element => {
            new DkeywordList(element).save(err => console.log(err));
        }); 
        keywordsList.forEach(element => {
            new KeywordsList(element).save(err => console.log(err));
        }); 
        recommendList.forEach(element => {
            new RecommendList(element).save(err => console.log(err));
        }); 

    })