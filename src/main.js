const electron = require('electron');

const app = electron.app;
const browserWindow = electron.BrowserWindow;

app.on('ready', _ => {
    new browserWindow({
        width:400,
        height:400
    });
})