const electron = require('electron');

const app = electron.app;
const browserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', _ => {
    mainWindow = new browserWindow({
        width:400,
        height:400
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.on('closed', _ => {
        mainWindow = null;
    });
})

