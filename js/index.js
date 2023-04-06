const $ = document;
const mobileMenuToggle = $.querySelector("#m-menu-toggle");
const mobileMenu = $.querySelector("#mobile-menu");


const animation = bodymovin.loadAnimation({
    container: $.querySelector("#path"),
    renderer: "svg",
    loop: false,
    path: "./images/lottie/art.json"
})


AOS.init();


// mobile menu
mobileMenuToggle.addEventListener("click", () => {
    mobileMenuToggle.classList.add("animate-toggle");

    const hasClass = mobileMenu.className.includes("m-menu-hidden");

    if (hasClass) {
        mobileMenu.classList.remove("m-menu-hidden");
        mobileMenu.classList.add("m-menu-visible");
    }
    else {
        mobileMenu.classList.remove("m-menu-visible");
        mobileMenu.classList.add("m-menu-hidden");
    }
})

mobileMenuToggle.addEventListener("animationend", e => {
    if (e.animationName === "toggle") {
        mobileMenuToggle.classList.remove("animate-toggle");
    }
})

const hiddenMobileMenu = event => {
    const spanInMobileMenusArray = [];
    const spanInMobileMenus = mobileMenu.querySelectorAll("a, span, svg, g, path")
    spanInMobileMenus.forEach(Element => {
        spanInMobileMenusArray.push(Element)
    })

    const hasElem = event.target === mobileMenuToggle
        || event.target === mobileMenuToggle.querySelector("path")
        || event.target === mobileMenu
        || Boolean(spanInMobileMenusArray.filter(span => event.target === span).length);

    if (!hasElem) {
        mobileMenu.classList.remove("m-menu-visible");
        mobileMenu.classList.add("m-menu-hidden");
    }
}

$.body.addEventListener("click", e => hiddenMobileMenu(e))
$.body.addEventListener("touchstart", e => hiddenMobileMenu(e))