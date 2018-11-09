const electron = require('electron');
const {ipcMain} = require('electron');
const app = electron.app;
const browserWindow = electron.BrowserWindow;

let mainWindow;
let saveRequestWindow;

app.on('ready', _ => {
    mainWindow = new browserWindow(
    );

    mainWindow.webContents.openDevTools();

    mainWindow.maximize();

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.on('closed', _ => {
        mainWindow = null;
    });

    saveRequestWindow = new browserWindow({show: false, width: 800, height: 600});
    saveRequestWindow.loadURL(`file://${__dirname}/saveRequest/saveRequest.html`);

    ipcMain.on('show-save', function() {
        saveRequestWindow.show();
    })

    ipcMain.on('close-saveRequest', function() {
        saveRequestWindow.hide();
    });

})

