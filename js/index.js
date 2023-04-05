const $ = document;

AOS.init();

const animation = bodymovin.loadAnimation({
    container: $.querySelector("#path"),
    renderer: "svg",
    loop: false,
    path: "./images/lottie/art.json"
})