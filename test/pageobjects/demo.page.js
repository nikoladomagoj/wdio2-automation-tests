class Demo {
    get username() {
        return $('input[data-test="username"]');
    }
    get password() {
        return $('input[data-test="password"]');
    }
    get loginButton() {
        return $('input[data-test="login-button"]');
    }
    get addToCart() {
        return $('button[data-test="add-to-cart-sauce-labs-backpack"]');
    }
    get removeItem() {
        return $('button[data-test="remove-sauce-labs-backpack"]');
    }
    get shoppingCart() {
        return $('div[id="shopping_cart_container"]');
    }
    get checkout() {
        return $('button[data-test="checkout"]');
    }
    get firstName() {
        return $('input[data-test="firstName"]');
    }
    get lastName() {
        return $('input[data-test="lastName"]');
    }
    get postalCode() {
        return $('input[data-test="postalCode"]');
    }
    get continue() {
        return $('input[data-test="continue"]');
    }
    get finish() {
        return $('button[data-test="finish"]');
    }
    get backHome() {
        return $('button[data-test="back-to-products"]');
    }
}
module.exports = new Demo();