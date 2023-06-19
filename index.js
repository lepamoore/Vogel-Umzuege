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

function resetGallery() {
	const gallery = document.getElementById("section-three-card-list");
	gallery.style.right = '0px';
}

function gallerySlideMobile(e) {
	if (gallerySlideIsTransitioning) {
		return;
	}

	const gallery = document.getElementById("section-three-card-list");
	const computedStyle = window.getComputedStyle(gallery);
	const rightValue = computedStyle.getPropertyValue("right");

	if (e.currentTarget.id === "arrow-left-mobile") {
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
			document.getElementById("arrow-right-mobile").style.opacity = "1";
			document.getElementById("arrow-right-standard").style.opacity = "1";
		}
		if (parseFloat(rightValue) === convertViewportWidthToPixel(100)) {
			document.getElementById("arrow-left-mobile").style.opacity = "0.25";
			document.getElementById("arrow-left-standard").style.opacity = "0.25";
		}
	} else if (e.currentTarget.id === "arrow-right-mobile") {
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
			document.getElementById("arrow-left-mobile").style.opacity = "1";
		}
		if (parseFloat(rightValue) === convertViewportWidthToPixel(500)) {
			document.getElementById("arrow-right-mobile").style.opacity = "0.25";
		}
	}
}

function gallerySlideTablet(e) {
	if (gallerySlideIsTransitioning) {
		return;
	}
	console.log("lol");

	const gallery = document.getElementById("section-three-card-list");
	const computedStyle = window.getComputedStyle(gallery);
	const rightValue = computedStyle.getPropertyValue("right");

	if (e.currentTarget.id === "arrow-left-standard") {
		if (parseFloat(rightValue) > 0) {
			gallerySlideIsTransitioning = true;
			gallery.style.right = `${parseFloat(rightValue) - 464}px`;
			setTimeout(() => {
				gallerySlideIsTransitioning = false;
			}, 500);
		}
		if (parseFloat(rightValue) === 2784) {
			document.getElementById("arrow-right-standard").style.opacity = "1";
		}
		if (parseFloat(rightValue) === 464) {
			document.getElementById("arrow-left-standard").style.opacity = "0.25";
		}
	} else if (e.currentTarget.id === "arrow-right-standard") {
		if (parseFloat(rightValue) < 2784) {
			gallerySlideIsTransitioning = true;
			gallery.style.right = `${parseFloat(rightValue) + 464}px`;
			setTimeout(() => {
				gallerySlideIsTransitioning = false;
			}, 500);
		}
		if (parseFloat(rightValue) === 0) {
			document.getElementById("arrow-left-standard").style.opacity = "1";
		}
		if (parseFloat(rightValue) === 2320) {
			document.getElementById("arrow-right-standard").style.opacity = "0.25";
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

function executeCode(mediaQuery) {
	if (mediaQuery.matches) {
		if (mediaQuery === mediaQuery766) {
			//CALL
			resetGallery();
			//REMOVE
			document
			.getElementById("arrow-right-standard")
			.removeEventListener("click", gallerySlideTablet);
		document
			.getElementById("arrow-left-standard")
			.removeEventListener("click", gallerySlideTablet);
			//ADD
			document
				.getElementById("arrow-left-mobile")
				.addEventListener("click", gallerySlideMobile);
			document
				.getElementById("arrow-right-mobile")
				.addEventListener("click", gallerySlideMobile);
		} else if (mediaQuery === mediaQuery767) {
			//CALL
			resetGallery();
			//REMOVE
			document
				.getElementById("arrow-left-mobile")
				.removeEventListener("click", gallerySlideMobile);
			document
				.getElementById("arrow-right-mobile")
				.removeEventListener("click", gallerySlideMobile);
			//ADD
			document
				.getElementById("arrow-right-standard")
				.addEventListener("click", gallerySlideTablet);
			document
				.getElementById("arrow-left-standard")
				.addEventListener("click", gallerySlideTablet);
		}
	}
}

// Media Query für bis 766 Pixel
const mediaQuery766 = window.matchMedia("(max-width: 766px)");
executeCode(mediaQuery766);
mediaQuery766.addEventListener("change", function (event) {
	executeCode(event.currentTarget);
});

// Media Query für ab 767 Pixel
const mediaQuery767 = window.matchMedia(
	"(min-width: 767px)"
);
executeCode(mediaQuery767);
mediaQuery767.addEventListener("change", function (event) {
	executeCode(event.currentTarget);
});

document
	.getElementById("header-burger-container")
	.addEventListener("click", handleMenuClick);
