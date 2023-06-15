let gallerySlideIsTransitioning = false;

function convertViewportWidthToPixel(value) {
	const pixelValue = (parseFloat(value) / 100) * window.innerWidth;
	return pixelValue;
}

function handleMenuClick(e) {
	const element = document.getElementById("header-burger-icon");
	const crossElement = document.getElementById("header-cross-icon");
	const navElement = document.getElementById("nav");
	const computedStyle = window.getComputedStyle(element);
	const opacityValue = computedStyle.getPropertyValue("opacity");

	if (opacityValue === "1") {
		element.style.opacity = "0";
		crossElement.style.opacity = "1";
		navElement.style.left = "0";
	} else {
		element.style.opacity = "1";
		crossElement.style.opacity = "0";
		navElement.style.left = "100vw";
	}
}

function closeMenu() {
    const element = document.getElementById("header-burger-icon");
	const crossElement = document.getElementById("header-cross-icon");
	const navElement = document.getElementById("nav");
	const computedStyle = window.getComputedStyle(element);
	const opacityValue = computedStyle.getPropertyValue("opacity");

	if (opacityValue === "0") {
		element.style.opacity = "1";
		crossElement.style.opacity = "0";
		navElement.style.left = "100vw";
	}
}

function gallerySlide(e) {
	if (gallerySlideIsTransitioning) {
		return;
	}

	const gallery = document.getElementById("section-three-card-list");
	const computedStyle = window.getComputedStyle(gallery);
	const rightValue = computedStyle.getPropertyValue("right");

	if (e.currentTarget.id === "arrow-left") {
		if (parseFloat(rightValue) > convertViewportWidthToPixel(0)) {
			gallerySlideIsTransitioning = true;
			gallery.style.right = `${
				parseFloat(rightValue) - convertViewportWidthToPixel(100)
			}px`;
			setTimeout(() => {
				gallerySlideIsTransitioning = false;
			}, 500);
		}
		if (parseFloat(rightValue) === convertViewportWidthToPixel(600)) {
			document.getElementById("arrow-right").style.opacity = "1";
		}
		if (parseFloat(rightValue) === convertViewportWidthToPixel(100)) {
			document.getElementById("arrow-left").style.opacity = "0.25";
		}
	} else if (e.currentTarget.id === "arrow-right") {
		if (parseFloat(rightValue) < convertViewportWidthToPixel(600)) {
			gallerySlideIsTransitioning = true;
			gallery.style.right = `${
				parseFloat(rightValue) + convertViewportWidthToPixel(100)
			}px`;
			setTimeout(() => {
				gallerySlideIsTransitioning = false;
			}, 500);
		}
		if (parseFloat(rightValue) === convertViewportWidthToPixel(0)) {
			document.getElementById("arrow-left").style.opacity = "1";
		}
		if (parseFloat(rightValue) === convertViewportWidthToPixel(500)) {
			document.getElementById("arrow-right").style.opacity = "0.25";
		}
	}
}

function scrollToStart(e) {
	document.getElementById("hero-section").scrollIntoView(true);
    closeMenu();
}
function scrollToAbout(e) {
	document.getElementById("section-two").scrollIntoView(true);
    closeMenu();
}
function scrollToServices(e) {
	document.getElementById("section-three").scrollIntoView(true);
    closeMenu();
}
function scrollToWhy(e) {
	document.getElementById("section-four").scrollIntoView(true);
    closeMenu();
}

document
	.getElementById("header-burger-container")
	.addEventListener("click", handleMenuClick);

document.getElementById("arrow-left").addEventListener("click", gallerySlide);
document.getElementById("arrow-right").addEventListener("click", gallerySlide);
