var dataBase = require('./createdb');
var chapterList = '247a5803-b2b5-4c26-8d37-8335702400fe';
var key1 = "info.2019-11-05.word";
var key2 = "info.2019-11-05.time";
dataBase.update({
    _chapterId: chapterList
}, {
    $unset: {
        localChaptersID: true,
        localReelsID: true
    }
}, {
    upsert: true
}, (err) => {
    if (err) {
        console.log(err);
    }
});