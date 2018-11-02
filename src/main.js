const electron = require('electron');

const app = electron.app;
const browserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', _ => {
    mainWindow = new browserWindow({
    });

    mainWindow.webContents.openDevTools();

    mainWindow.maximize();

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.on('closed', _ => {
        mainWindow = null;
    });
})

