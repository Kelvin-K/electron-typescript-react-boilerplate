import * as path from "path";
import { Application } from "spectron";

var electronPath = path.join(__dirname, '..', "..", "..", 'node_modules', '.bin', 'electron');
var appPath = path.join(__dirname, '..');

if (process.platform === 'win32')
    electronPath += '.cmd';

var app = new Application({
    path: electronPath,
    args: [ appPath ]
});

test("it should start", async () =>
{
    app.start().then(() =>
    {
        expect(app.browserWindow.isVisible()).toBeTruthy()
    })
});
