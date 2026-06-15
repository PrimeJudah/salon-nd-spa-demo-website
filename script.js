/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
document.getElementById("menuBtn");

const menu =
document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("show");

});


/* ==========================
   HERO IMAGE SLIDER
========================== */

const slides = [

    "image1.jpg.jpeg",
    "image2.jpg.jpeg",
    "image3.jpg.jpeg",
    "image4.jpg.jpeg",
    "image5.jpg.jpeg",
    "image6.jpg.jpeg",
    "image 8.jpg.jpeg",
    "image9.jpg.jpeg",
    "image10.jpg.jpeg"

];

const slideImage =
document.getElementById("slideImage");

let currentSlide = 0;

setInterval(() => {

    slideImage.style.opacity = "0.4";

    setTimeout(() => {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        slideImage.src =
        slides[currentSlide];

        slideImage.style.opacity = "1";

    }, 800);

}, 6000);


/* ==========================
   GALLERY LIGHTBOX
========================== */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const overlay =
        document.createElement("div");

        overlay.classList.add("lightbox");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background =
        "rgba(0,0,0,0.92)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "10000";
        overlay.style.cursor = "pointer";

        const img =
        document.createElement("img");

        img.src = image.src;

        img.style.maxWidth = "90%";
        img.style.maxHeight = "90%";
        img.style.borderRadius = "20px";
        img.style.boxShadow =
        "0 15px 40px rgba(0,0,0,.4)";

        overlay.appendChild(img);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

        document.body.appendChild(overlay);

    });

});


/* ==========================
   SCROLL ANIMATIONS
========================== */

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.15
});

const animatedSections =
document.querySelectorAll(
".about, .why-us, .services, .gallery, .reviews, .cta, .contact"
);

animatedSections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform =
    "translateY(50px)";
    section.style.transition =
    "all 1s ease";

    observer.observe(section);

});


/* ==========================
   REVIEW AUTO ROTATION
========================== */

const reviews =
document.querySelectorAll(".review-card");

let reviewIndex = 0;

setInterval(() => {

    reviews.forEach(review => {

        review.style.transform =
        "scale(0.95)";
        review.style.opacity = "0.6";

    });

    reviews[reviewIndex].style.transform =
    "scale(1.05)";

    reviews[reviewIndex].style.opacity =
    "1";

    reviewIndex++;

    if(reviewIndex >= reviews.length){

        reviewIndex = 0;

    }

}, 3000);


/* ==========================
   WHATSAPP CTA PULSE
========================== */

const whatsappBtn =
document.querySelector(".whatsapp-btn");

setInterval(() => {

    whatsappBtn.style.transform =
    "scale(1.15)";

    setTimeout(() => {

        whatsappBtn.style.transform =
        "scale(1)";

    }, 500);

}, 2500);


/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


/* ==========================
   CLOSE MOBILE MENU
========================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("show");

    });

});


/* ==========================
   CTA BUTTON EFFECT
========================== */

const buttons =
document.querySelectorAll(
".btn, .btn-secondary, .cta-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
        "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
        "translateY(0px)";

    });

});