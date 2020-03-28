const path = require('path');
const express = require('express');
const app = express();
app.listen("80", 'localhost', function (err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('服务启动成功');
});
app.get('/', function (req, res) {
	console.log('访问我了');
	const appPath = path.resolve(__dirname, '../')
	console.log('appPath', appPath);
	const fileSrc = path.join(appPath, 'mobile/index.html')
	// res.setHeader('Content-Type', 'text/html');
	console.log('fileSrc', fileSrc)
	res.sendFile(fileSrc);
});
