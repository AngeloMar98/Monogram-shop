const body = document.querySelector("body");
const navBarMobile = document.querySelector(".mobile-nav");
const openNavBtn = document.querySelector(".open-mobile-menu");
const closeNavBtn = document.querySelector(".close-mobile-menu");
const scrollMenus = document.querySelectorAll(".scroll-menu");
const downward = document.querySelector(".downward");
const products1 = document.getElementById("products1");

const prices = document.querySelectorAll(".price");

//  "USD" | "USD" | "CAD" | "AUD" | "KRW" | "YEN"

let previousCurrency: string;
const currencyMenu = document.querySelector(".currency-menu");
const currCurrencyLong = document.querySelector(".current-currency-long");
const currCurrencyShort = document.querySelector(".current-currency-short");

declare var fx: any;

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
    const priceNumber = price.querySelector(".price-numb");
    const priceCurrency = price.querySelector(".price-currenc");

    console.log(
      previousCurrency,
      currCurrencyLong?.textContent,
      priceNumber?.textContent +
        "converts into" +
        fx
          .convert(Number(priceNumber?.textContent?.replaceAll(",", "")), {
            from: previousCurrency,
            to: currCurrencyLong?.textContent,
          })
          .toFixed(2)
    );

    switch (currCurrencyLong?.textContent) {
      case "USD":
        priceCurrency!.textContent = "US$";
        priceNumber!.textContent = String(
          Intl.NumberFormat("en-US").format(
            fx
              .convert(Number(priceNumber?.textContent?.replaceAll(",", "")), {
                from: previousCurrency,
                to: currCurrencyLong?.textContent,
              })
              .toFixed(2)
          )
        );
        break;
      case "CAD":
        priceCurrency!.textContent = "CA$";
        priceNumber!.textContent = String(
          Intl.NumberFormat("en-CA").format(
            fx
              .convert(Number(priceNumber?.textContent?.replaceAll(",", "")), {
                from: previousCurrency,
                to: currCurrencyLong?.textContent,
              })
              .toFixed(2)
          )
        );
        break;
      case "EUR":
        priceCurrency!.textContent = "€";
        priceNumber!.textContent = String(
          Intl.NumberFormat("de-DE").format(
            fx
              .convert(Number(priceNumber?.textContent?.replaceAll(",", "")), {
                from: previousCurrency,
                to: currCurrencyLong?.textContent,
              })
              .toFixed(2)
          )
        );
        break;
      case "AUD":
        priceCurrency!.textContent = "A$";
        priceNumber!.textContent = String(
          Intl.NumberFormat("en-AU").format(
            fx
              .convert(Number(priceNumber?.textContent?.replaceAll(",", "")), {
                from: previousCurrency,
                to: currCurrencyLong?.textContent,
              })
              .toFixed(2)
          )
        );
        break;
      case "GBP":
        priceCurrency!.textContent = "£";
        priceNumber!.textContent = String(
          Intl.NumberFormat("en-GB").format(
            fx
              .convert(Number(priceNumber?.textContent?.replaceAll(",", "")), {
                from: previousCurrency,
                to: currCurrencyLong?.textContent,
              })
              .toFixed(2)
          )
        );
        break;
      case "KRW":
        priceCurrency!.textContent = "₩";
        priceNumber!.textContent = String(
          Intl.NumberFormat("ko-KR").format(
            fx
              .convert(Number(priceNumber?.textContent?.replaceAll(",", "")), {
                from: previousCurrency,
                to: currCurrencyLong?.textContent,
              })
              .toFixed(2)
          )
        );
        break;
      case "YEN":
        priceCurrency!.textContent = "¥";
        priceNumber!.textContent = String(
          Intl.NumberFormat("ja-JP").format(
            fx
              .convert(Number(priceNumber?.textContent?.replaceAll(",", "")), {
                from: previousCurrency,
                to: currCurrencyLong?.textContent,
              })
              .toFixed(2)
          )
        );
        break;
    }
  });
};

const toggleNav = function () {
  navBarMobile?.classList.toggle("-translate-x-full");
  navBarMobile?.classList.toggle("navbar-shadow");
  body?.classList.toggle("overflow-y-hidden");
};

openNavBtn?.addEventListener("click", toggleNav);

closeNavBtn?.addEventListener("click", toggleNav);

body?.addEventListener("click", function (e) {
  /* otherwise the open menu would toggle it twice, hence keeping it open */
  if (
    e.target!.closest(".mobile-nav") ||
    e.target!.closest(".open-mobile-menu")
  )
    return;
  navBarMobile?.classList.add("-translate-x-full");
  navBarMobile?.classList.remove("navbar-shadow");
  body?.classList.remove("overflow-y-hidden");
});

scrollMenus.forEach((scrollMenu) =>
  scrollMenu.addEventListener("click", function (e) {
    if (e.target!.closest("ul")) return;
    scrollMenu.querySelector("ul")?.classList.toggle("hidden");
    scrollMenu.querySelector("div")!.classList.toggle("!text-[#fff]");
    scrollMenu.querySelector("div")!.classList.toggle("group-hover:opacity-75");
    if (
      scrollMenu
        .querySelector("div")!
        .classList.contains("desktop:hover:opacity-75")
    ) {
      scrollMenu
        .querySelector("div")!
        .classList.toggle("desktop:hover:opacity-75");
    }
  })
);

downward?.addEventListener("click", function (e) {
  products1?.scrollIntoView({ behavior: "smooth" });
});

currencyMenu?.addEventListener("click", function (e) {
  if (!(e.target instanceof HTMLElement)) return;

  if (!e.target!.closest("li")) return;

  const el = e.target.closest("li");

  previousCurrency = currCurrencyLong?.textContent || "USD";

  currCurrencyLong!.textContent =
    el!.querySelector(".currency-name")!.textContent;
  currCurrencyShort!.textContent =
    el!.querySelector(".currency-name")!.dataset.symbol;

  updatePricesCurrency();
});
