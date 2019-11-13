var dataBase = require('./createdb')
var chapterList = [
    '8b7541d2-f693-4b3b-990d-ab7ffd3be58b',
    '247a5803-b2b5-4c26-8d37-8335702400fe'
]
// dataBase.find({_chapterId: {$nin: chapterList}}, (err, data) => {
//     console.log(data)
// })
dataBase.find({$or: [{status: 0}, {status: {$exists: false}}]}, (err, data) => {
    console.log(data)
})
