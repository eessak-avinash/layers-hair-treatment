document.addEventListener("DOMContentLoaded", () => {
	const toggleButton = document.getElementById("mobileToggle");
	const navMenu = document.getElementById("navMenu");

	if (toggleButton && navMenu) {
		toggleButton.addEventListener("click", () => {
			navMenu.classList.toggle("active");

			const isExpanded = navMenu.classList.contains("active");
			toggleButton.setAttribute("aria-expanded", String(isExpanded));
		});
	}

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href");
			if (!targetId || targetId === "#") return;

			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});

				if (navMenu && navMenu.classList.contains("active")) {
					navMenu.classList.remove("active");
				}
			}
		});
	});

	const copyrightElement = document.querySelector(".copyright p");
	if (copyrightElement) {
		const currentYear = new Date().getFullYear();
		copyrightElement.innerHTML =
			copyrightElement.innerHTML.replace("2025", currentYear);
	}

	const observerOptions = {
		threshold: 0.1,
		rootMargin: "0px 0px -50px 0px",
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	const animatedElements = document.querySelectorAll(".animate-on-scroll");
	animatedElements.forEach((el) => observer.observe(el));
});

let selectedIndex = 1;

function getSelectedColor(index) {
  selectedIndex = index;

  document.querySelectorAll(".nav-link").forEach((link, i) => {
    link.classList.toggle("active", (i + 1) === index);
  });
}

const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
	let currentSection = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 120;
		const sectionHeight = section.offsetHeight;
		const scrollView = window.scrollY + 350;

		console.log(scrollView);
		console.log(sectionTop);
		console.log(sectionHeight);

		if (
			scrollView >= sectionTop &&
			scrollView < sectionTop + sectionHeight
		) {
			currentSection = section.getAttribute("id");
		}
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");

		const href = link.getAttribute("href").replace("#", "");

		if (href === currentSection) {
			link.classList.add("active");
		}
	});
});