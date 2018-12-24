const app = require("../setupElectron");

test("it should start", async () =>
{
    app.start().then(() =>
    {
        expect(app.browserWindow.isVisible()).toBeTruthy()
    })
});
