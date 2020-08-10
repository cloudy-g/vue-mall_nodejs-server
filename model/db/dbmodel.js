const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/atmogujie', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const Schema = mongoose.Schema;

const BannerListSchema = new Schema({
    acm: String,
    height: Number,
    height923: Number,
    width: Number,
    width923: Number,
    image: String,
    image923: String,
    link: String,
    title: String,
});

const DkeywordListScema = new Schema({
    acm: String,
    defaultKeyWord: String
});

const KeywordsListScema = new Schema({
    acm: String,
    words: String,
    is_red: String
})

const RecommendListScema = new Schema({
    acm: String,
    link: String,
    img: String,
    sort: Number,
    title: String,
})

const BannerList = mongoose.model('BannerList', BannerListSchema);
const DkeywordList = mongoose.model('DkeywordList', DkeywordListScema);
const KeywordsList = mongoose.model('KeywordsList', KeywordsListScema);
const RecommendList = mongoose.model('RecommendList', RecommendListScema);

module.exports = {
    BannerList,
    DkeywordList,
    KeywordsList,
    RecommendList
}