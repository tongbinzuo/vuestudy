// {"_chapterId":"8b7541d2-f693-4b3b-990d-ab7ffd3be58b","status":1,"_id":"mrIjb1QS4jAYONuE","createdAt":{"$$date":1571984287145},"updatedAt":{"$$date":1571984287145}}
// {"_chapterId":"247a5803-b2b5-4c26-8d37-8335702400fe","status":1,"_id":"2AcjjqbDxMeSmSpg","createdAt":{"$$date":1571984292030},"updatedAt":{"$$date":1571984292030}}
// {"_chapterId":"45533ce9-8328-4e64-bdfe-7553dcffd3d5","status":1,"_id":"CjN1dpA6gfRdoESx","createdAt":{"$$date":1571984295053},"updatedAt":{"$$date":1571984295053}}
// {"_chapterId":"158fadb2-b5ae-4379-b9d6-191c3d121747","status":1,"_id":"yN4vJ9LkRvxeoNkS","createdAt":{"$$date":1571984298906},"updatedAt":{"$$date":1571984298906}}
var nedb = require('nedb')
var path = require('path')
// console.log('__dirname', __dirname)
//获取上层文件夹
// console.log('获取上层文件夹', path.resolve(__dirname, '..'))
const file = path.resolve(__dirname, '..')
var dateBase = new nedb({filename: path.join(file, 'datastore', 'test.db'), autoload: true})
module.exports=dateBase
