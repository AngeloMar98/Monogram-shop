"use strict";
const body = document.querySelector("body");
const navBarMobile = document.querySelector(".mobile-nav");
const openNavBtn = document.querySelector(".open-mobile-menu");
const closeNavBtn = document.querySelector(".close-mobile-menu");
const scrollMenus = document.querySelectorAll(".scroll-menu");
const downward = document.querySelector(".downward");
const products1 = document.getElementById("products1");
const prices = document.querySelectorAll(".price");
//  "USD" | "USD" | "CAD" | "AUD" | "KRW" | "YEN"
let previousCurrency;
const currencyMenu = document.querySelector(".currency-menu");
const currCurrencyLong = document.querySelector(".current-currency-long");
const currCurrencyShort = document.querySelector(".current-currency-short");
fx.base = "USD";
fx.rates = {
    GBP: 0.79,
    EUR: 0.92,
    USD: 1,
    CAD: 1.36,
    AUD: 0.79,
    KRW: 1340.16,
    YEN: 145.42,
};
const updatePricesCurrency = function () {
    prices.forEach((price) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const priceNumber = price.querySelector(".price-numb");
        const priceCurrency = price.querySelector(".price-currenc");
        console.log(previousCurrency, currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent, (priceNumber === null || priceNumber === void 0 ? void 0 : priceNumber.textContent) +
            "converts into" +
            fx
                .convert(Number((_a = priceNumber === null || priceNumber === void 0 ? void 0 : priceNumber.textContent) === null || _a === void 0 ? void 0 : _a.replaceAll(",", "")), {
                from: previousCurrency,
                to: currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent,
            })
                .toFixed(2));
        switch (currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent) {
            case "USD":
                priceCurrency.textContent = "US$";
                priceNumber.textContent = String(Intl.NumberFormat("en-US").format(fx
                    .convert(Number((_b = priceNumber === null || priceNumber === void 0 ? void 0 : priceNumber.textContent) === null || _b === void 0 ? void 0 : _b.replaceAll(",", "")), {
                    from: previousCurrency,
                    to: currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent,
                })
                    .toFixed(2)));
                break;
            case "CAD":
                priceCurrency.textContent = "CA$";
                priceNumber.textContent = String(Intl.NumberFormat("en-CA").format(fx
                    .convert(Number((_c = priceNumber === null || priceNumber === void 0 ? void 0 : priceNumber.textContent) === null || _c === void 0 ? void 0 : _c.replaceAll(",", "")), {
                    from: previousCurrency,
                    to: currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent,
                })
                    .toFixed(2)));
                break;
            case "EUR":
                priceCurrency.textContent = "€";
                priceNumber.textContent = String(Intl.NumberFormat("de-DE").format(fx
                    .convert(Number((_d = priceNumber === null || priceNumber === void 0 ? void 0 : priceNumber.textContent)  === null || _c === void 0 ? void 0 : _c.replaceAll(",", "")), {
                    from: previousCurrency,
                    to: currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent,
                })
                    .toFixed(2)));
                break;
            case "AUD":
                priceCurrency.textContent = "A$";
                priceNumber.textContent = String(Intl.NumberFormat("en-AU").format(fx
                    .convert(Number((_e = priceNumber === null || priceNumber === void 0 ? void 0 : priceNumber.textContent) === null || _e === void 0 ? void 0 : _e.replaceAll(",", "")), {
                    from: previousCurrency,
                    to: currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent,
                })
                    .toFixed(2)));
                break;
            case "GBP":
                priceCurrency.textContent = "£";
                priceNumber.textContent = String(Intl.NumberFormat("en-GB").format(fx
                    .convert(Number((_f = priceNumber === null || priceNumber === void 0 ? void 0 : priceNumber.textContent) === null || _f === void 0 ? void 0 : _f.replaceAll(",", "")), {
                    from: previousCurrency,
                    to: currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent,
                })
                    .toFixed(2)));
                break;
            case "KRW":
                priceCurrency.textContent = "₩";
                priceNumber.textContent = String(Intl.NumberFormat("ko-KR").format(fx
                    .convert(Number((_g = priceNumber === null || priceNumber === void 0 ? void 0 : priceNumber.textContent) === null || _g === void 0 ? void 0 : _g.replaceAll(",", "")), {
                    from: previousCurrency,
                    to: currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent,
                })
                    .toFixed(2)));
                break;
            case "YEN":
                priceCurrency.textContent = "¥";
                priceNumber.textContent = String(Intl.NumberFormat("ja-JP").format(fx
                    .convert(Number((_h = priceNumber === null || priceNumber === void 0 ? void 0 : priceNumber.textContent) === null || _h === void 0 ? void 0 : _h.replaceAll(",", "")), {
                    from: previousCurrency,
                    to: currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent,
                })
                    .toFixed(2)));
                break;
        }
    });
};
const toggleNav = function () {
    navBarMobile === null || navBarMobile === void 0 ? void 0 : navBarMobile.classList.toggle("-translate-x-full");
    navBarMobile === null || navBarMobile === void 0 ? void 0 : navBarMobile.classList.toggle("navbar-shadow");
    body === null || body === void 0 ? void 0 : body.classList.toggle("overflow-y-hidden");
};
openNavBtn === null || openNavBtn === void 0 ? void 0 : openNavBtn.addEventListener("click", toggleNav);
closeNavBtn === null || closeNavBtn === void 0 ? void 0 : closeNavBtn.addEventListener("click", toggleNav);
body === null || body === void 0 ? void 0 : body.addEventListener("click", function (e) {
    /* otherwise the open menu would toggle it twice, hence keeping it open */
    if (e.target.closest(".mobile-nav") ||
        e.target.closest(".open-mobile-menu"))
        return;
    navBarMobile === null || navBarMobile === void 0 ? void 0 : navBarMobile.classList.add("-translate-x-full");
    navBarMobile === null || navBarMobile === void 0 ? void 0 : navBarMobile.classList.remove("navbar-shadow");
    body === null || body === void 0 ? void 0 : body.classList.remove("overflow-y-hidden");
});
scrollMenus.forEach((scrollMenu) => scrollMenu.addEventListener("click", function (e) {
    var _a;
    if (e.target.closest("ul"))
        return;
    (_a = scrollMenu.querySelector("ul")) === null || _a === void 0 ? void 0 : _a.classList.toggle("hidden");
    scrollMenu.querySelector("div").classList.toggle("!text-[#fff]");
    scrollMenu.querySelector("div").classList.toggle("group-hover:opacity-75");
    if (scrollMenu
        .querySelector("div")
        .classList.contains("desktop:hover:opacity-75")) {
        scrollMenu
            .querySelector("div")
            .classList.toggle("desktop:hover:opacity-75");
    }
}));
downward === null || downward === void 0 ? void 0 : downward.addEventListener("click", function (e) {
    products1 === null || products1 === void 0 ? void 0 : products1.scrollIntoView({ behavior: "smooth" });
});
currencyMenu === null || currencyMenu === void 0 ? void 0 : currencyMenu.addEventListener("click", function (e) {
    if (!(e.target instanceof HTMLElement))
        return;
    if (!e.target.closest("li"))
        return;
    const el = e.target.closest("li");
    previousCurrency = (currCurrencyLong === null || currCurrencyLong === void 0 ? void 0 : currCurrencyLong.textContent) || "USD";
    currCurrencyLong.textContent =
        el.querySelector(".currency-name").textContent;
    currCurrencyShort.textContent =
        el.querySelector(".currency-name").dataset.symbol;
    updatePricesCurrency();
});
