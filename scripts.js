var image = document.getElementById("dynamicBanner");
var currentPos = 0;
var images = ["images/banner.jpg", "images/banner2.jpg", "images/banner3.jpg"];

function volgendefoto() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}

setInterval(volgendefoto, 3000);

