// ==========================
// Sticky Navbar Shadow
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ==========================
// Active Navbar Link
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==========================
// Fade In Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements = document.querySelectorAll(".card,.box,.project-card,.about-container");

hiddenElements.forEach((el) => {

    el.classList.add("hidden");

    observer.observe(el);

});

// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#111";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ==========================
// Typing Animation
// ==========================

const text = "Aspiring Software Developer";

const heading = document.querySelector(".hero-text h3");

let i = 0;

heading.innerHTML = "";

function typing() {

    if (i < text.length) {

        heading.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 80);

    }

}

typing();