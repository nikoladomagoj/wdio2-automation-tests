const demoPage = require("../pageobjects/demo.page");

const loginURL = 'https://www.saucedemo.com/';  

describe('Demo', ()=> {

    let username;
    let password;

    before('Daj vrijednost ovim iznad varijablama', async () => {
        username = 'standard_user';
        password = 'secret_sauce';
        await browser.url(loginURL);
    });

    it('Vjezba',  async () => {

        await demoPage.username.setValue(username);
        await demoPage.password.setValue(password);
        await demoPage.loginButton.click();

        await demoPage.addToCart.click();
        expect (demoPage.removeItem).toBeDisplayed();

        await demoPage.shoppingCart.click();
        await demoPage.checkout.click();

        await demoPage.firstName.setValue('test');
        await demoPage.lastName.setValue('test');
        await demoPage.postalCode.setValue('10000');

        await demoPage.continue.click();
        await browser.saveScreenshot('./screenshot.png');
        await demoPage.finish.click();
        await demoPage.backHome.click();
    })

    after ('Izbrisi mi cookie', async () => {
        await browser.deleteAllCookies();
    });
})