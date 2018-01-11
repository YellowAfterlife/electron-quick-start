const electron = require('electron')
const app = electron.app
const path = require('path')
app.on('ready', () => {
	let test = path.join(__dirname, 'index.html')
	test = test.replace(/^(.+)\\(.+)$/, "$1/$2") // simulate a forward slash in path
	console.log(test)
	console.log(electron.shell.showItemInFolder(test))
	app.quit()
})
