Function.prototype.call2 = function (context) {
	// context为null的时候，context为window
	var context = context || window
	// 获取调用call的函数
	context.fn = this
	console.log('prototype', this)
	// 获取call方法的不定长参数
	var args = []
	for (var i = 1, len = arguments.length; i < len; i++) {
		args.push(arguments[i])
	}
	// 使用ES6扩展运算符（...）执行函数，返回结果
	var result = context.fn(...args)
	// 删除fn属性
	delete context.fn
	// 返回结果
	return result;
}
//实例对象会找到 prototype 这个对象实例上
add.prototype.call2 = function () {
	console.log('add.prototype', this)
}

//向上找 __proto__ 找到 Function 函数
function add(c) {
	console.log(this.a + this.b + c)
}
//函数方法内部的 this 谁调用指向谁
// add.call = function () {
// 	console.log(this)
// }
const obj = {
	a: '张三',
	b: '李四',
	call() {
		console.log(this)
	}
}
//命名函数 属于函数对象  向上找 __proto__ 找到 Function 函数
add.call2(obj, '王五')
