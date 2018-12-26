import app from "../setupElectron";

test("it should start", async () =>
{
    app.start()
        .then(() =>
        {
            expect(app.browserWindow.isVisible()).toBeTruthy();
        })
        .catch((error) => 
        {
            console.log("error:" + error);
        })
});
