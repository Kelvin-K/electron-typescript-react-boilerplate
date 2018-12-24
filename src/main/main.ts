import Electron from "electron";
import windowStateKeeper from "electron-window-state";
import * as path from "path";
import * as url from "url";

let mainWindow: Electron.BrowserWindow;

Electron.app.on("ready", () =>
{
    // maintain electron window state
    const mainWindowState = windowStateKeeper({
        defaultHeight: 800,
        defaultWidth: 1000
    });

    // initiate electron window
    mainWindow = new Electron.BrowserWindow({
        frame: true,
        height: mainWindowState.height,
        icon: path.resolve(
            Electron.app.getAppPath(),
            "./dist/resources/favicon.ico"
        ),
        show: false,
        title: "app",
        width: mainWindowState.width,
        x: mainWindowState.x,
        y: mainWindowState.y
    });

    mainWindow.setMinimumSize(200, 200);

    mainWindow.loadURL(
        url.format({
            pathname: path.resolve(Electron.app.getAppPath(), "./dist/index.html"),
            protocol: "file:",
            slashes: true
        })
    );

    mainWindow.setMenu(null);

    // show window after renderer is ready
    mainWindow.webContents.on("did-finish-load", () =>
    {
        mainWindow.show();
    });
    mainWindow.webContents.openDevTools();
    // update state when window state changes
    mainWindowState.manage(mainWindow);
});

Electron.app.on("window-all-closed", () =>
{
    if (process.platform !== "darwin")
    {
        Electron.app.quit();
    }
});
