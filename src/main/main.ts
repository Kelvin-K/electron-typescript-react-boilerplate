import Electron from "electron";
import * as path from "path";
import * as url from 'url';
const windowStateKeeper = require('electron-window-state');

let mainWindow: Electron.BrowserWindow;

Electron.app.on('ready', () => 
{
    //maintain electron window state
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 800
    });

    //initiate electron window
    mainWindow = new Electron.BrowserWindow({
        title: "app",
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        icon: path.resolve(Electron.app.getAppPath(), "./dist/resources/appIcon.ico"),
        frame: true,
        show: false
    });
    mainWindow.setMinimumSize(200, 200);

    mainWindow.loadURL(url.format({
        pathname: path.resolve(Electron.app.getAppPath(), "./dist/index.html"),
        protocol: "file:",
        slashes: true
    }));

    mainWindow.setMenu(null);

    //show window after renderer is ready
    mainWindow.webContents.on("did-finish-load", () =>
    {
        mainWindow.show();
    });
    mainWindow.webContents.openDevTools();
    //update state when window state changes
    mainWindowState.manage(mainWindow);
});

Electron.app.on('window-all-closed', () =>
{
    if (process.platform !== 'darwin')
    {
        Electron.app.quit();
    }
});
