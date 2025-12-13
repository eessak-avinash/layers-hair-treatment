import React, { useEffect } from "react";
import "./HomePage.scss";
import BasicForm from "../basicForm/BasicForm";

const HomePage = () => {
	useEffect(() => {
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
			copyrightElement.innerHTML = copyrightElement.innerHTML.replace(
				"2025",
				currentYear
			);
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

		const animatedElements =
			document.querySelectorAll(".animate-on-scroll");
		animatedElements.forEach((el) => observer.observe(el));

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<div className="HairPage">
			<header className="site-header">
				<div
					className="container header-wrapper"
					style={{ justifyContent: "space-between" }}
				>
					<a href="#" className="logo">
						<img
							className="header-logo"
							src="/assets//New-layers-Logo.png"
							alt="LAYERS CLINICS"
						/>
					</a>
					<nav>
						<ul className="nav-menu" id="navMenu">
							<li>
								<a
									href="#home"
									className="nav-link active"
									onclick="getSelectedColor(1)"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="nav-link"
									onclick="getSelectedColor(2)"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#treatments"
									className="nav-link"
									onclick="getSelectedColor(3)"
								>
									Hair Transplants
								</a>
							</li>
							<li>
								<a
									href="#process"
									className="nav-link"
									onclick="getSelectedColor(4)"
								>
									Process
								</a>
							</li>
							<li>
								<a
									href="#faq"
									className="nav-link"
									onclick="getSelectedColor(5)"
								>
									FAQ
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="nav-link"
									onclick="getSelectedColor(6)"
								>
									Contact
								</a>
							</li>
						</ul>
					</nav>
					<a
						href="tel:+919000572727"
						className="header-call-btn pulse-maroon-btn"
					>
						+91 9000 572727
					</a>
					<div
						className="mobile-toggle"
						aria-label="Toggle Navigation"
						id="mobileToggle"
					>
						☰
					</div>
				</div>
			</header>

			<main>
				<section className="hero" id="home">
					<div className="container hero-content animate-on-scroll">
						<h1>
							Regain Your Hair.
							<br />
							Regain Your Confidence.
						</h1>
						<p>
							Natural, permanent hair restoration by expert
							surgeons using advanced FUE & DHI techniques.
							Experience the perfect blend of science and
							aesthetics.
						</p>
						<a href="#contact" className="btn btn-primary">
							Book Consultation
						</a>
					</div>
					<div className="form-component">
						<BasicForm />
					</div>
				</section>

				<section id="about" className="section-padding">
					<div className="container">
						<div className="intro-text animate-on-scroll">
							<h2>What Is Hair Transplantation?</h2>
							<p>
								A hair transplant is a minor surgical procedure
								that relocates healthy hair follicles from the
								donor area (usually the back of the scalp) to
								thinning or bald regions. At{" "}
								<strong>Layers Clinics</strong>, we use modern,
								pain-free transplant techniques that guarantee
								high graft survival rates and natural hairline
								design. [1]
							</p>
						</div>

						<div className="causes-wrapper animate-on-scroll">
							<h3 className="text-center">
								Why Does Hair Loss Happen?
							</h3>
							<div className="causes-grid">
								<div className="cause-item">
									<h4>Genetic Factors</h4>
									<p>
										Male/Female pattern baldness due to
										heredity.
									</p>
								</div>
								<div className="cause-item">
									<h4>Hormonal Imbalance</h4>
									<p>
										DHT sensitivity and hormonal changes
										triggering loss.
									</p>
								</div>
								<div className="cause-item">
									<h4>Stress & Lifestyle</h4>
									<p>
										Physical or emotional stress leading to
										shedding phases.
									</p>
								</div>
								<div className="cause-item">
									<h4>Nutritional Deficiency</h4>
									<p>
										Lack of essential vitamins weakening
										hair follicles.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="treatments"
					className="section-padding treatments-section"
				>
					<div className="container">
						<div className="text-center animate-on-scroll type-treatment-content">
							<h2>Types of Treatments</h2>
							<p>
								We offer advanced and hybrid hair transplant
								techniques tailored to your hair density and
								restoration goals.
							</p>
						</div>

						<div className="treatment-grid">
							<article className="treatment-card animate-on-scroll delay-100">
								<div className="badge">Most Popular</div>
								<div className="treatment-icon">★</div>
								<h3>FUE Method</h3>
								<p>
									<strong>Follicular Unit Extraction</strong>
								</p>
								<p>
									Individual hair follicles are extracted from
									the donor area and implanted into thinning
									regions. This minimally invasive technique
									ensures natural growth patterns and leaves
									minimal scarring.
								</p>
							</article>

							<article className="treatment-card animate-on-scroll delay-200">
								<div className="badge">High Coverage</div>
								<div className="treatment-icon">✚</div>
								<h3>FUT Method</h3>
								<p>
									<strong>Strip Method</strong>
								</p>
								<p>
									A strip of hair is removed from the back of
									the scalp, separated, and transplanted
									meticulously. This method is ideal for
									larger bald areas requiring maximum graft
									coverage in a single session.
								</p>
							</article>

							<article className="treatment-card animate-on-scroll delay-300">
								<div className="badge">Advanced</div>
								<div className="treatment-icon">⚡</div>
								<h3>DHI Method</h3>
								<p>
									<strong>Direct Hair Implantation</strong>
								</p>
								<p>
									A no-incision method using a specialized
									implanter pen to place grafts directly. It
									offers higher density, precise depth
									control, and faster healing times compared
									to traditional methods.
								</p>
							</article>
						</div>

						<div
							className="text-center animate-on-scroll"
							style={{ marginTop: "50px" }}
						>
							<a href="#contact" className="btn btn-primary">
								Compare Treatments with an Expert
							</a>
						</div>
					</div>
				</section>

				<div className="treatment-container animate-on-scroll">
					<div className="treatment-images-container ">
						<div className="slider-track">
							<img
								className="images"
								src="/assets/female_hair_treatment.jpeg"
								alt="hair-treatment-female"
							/>
							<img
								className="images"
								src="/assets/male_hair_treatment.jpeg"
								alt="hair-treatment-male"
							/>
														<img
								className="images"
								src="/assets/additional_image_one.jpeg"
								alt="layers-treatment-image"
							/>
																					<img
								className="images"
								src="/assets/additional_image_two.jpeg"
								alt="layers-treatment-image"
							/>
																					<img
								className="images"
								src="/assets/additional_image_three.jpeg"
								alt="layers-treatment-image"
							/>
																					<img
								className="images"
								src="/assets/additional_image_four.jpeg"
								alt="layers-treatment-image"
							/>
														<img
								className="images"
								src="/assets/female_hair_treatment.jpeg"
								alt="hair-treatment-female"
							/>
							<img
								className="images"
								src="/assets/male_hair_treatment.jpeg"
								alt="hair-treatment-male"
							/>
														<img
								className="images"
								src="/assets/additional_image_one.jpeg"
								alt="layers-treatment-image"
							/>
																					<img
								className="images"
								src="/assets/additional_image_two.jpeg"
								alt="layers-treatment-image"
							/>
																					<img
								className="images"
								src="/assets/additional_image_three.jpeg"
								alt="layers-treatment-image"
							/>
																					<img
								className="images"
								src="/assets/additional_image_four.jpeg"
								alt="layers-treatment-image"
							/>
						</div>
					</div>
					<p className="before-and-after-section">
						Before & After Treatment Images
					</p>
				</div>

				<section
					id="process"
					className="section-padding background-bg-light"
				>
					<div className="container">
						<h2 className="text-center animate-on-scroll">
							How It Works
						</h2>
						<div className="process-list">
							<div className="process-item animate-on-scroll">
								<h3>Consultation & Analysis</h3>
								<p>
									Detailed scalp analysis, hairline design
									consultation, and a review of your medical
									history to customize the plan.
								</p>
							</div>
							<div className="process-item animate-on-scroll">
								<h3>Preparation</h3>
								<p>
									Hair trimming and antiseptic scalp
									cleansing. Local anaesthesia is administered
									to ensure a completely comfortable
									experience.
								</p>
							</div>
							<div className="process-item animate-on-scroll">
								<h3>Graft Extraction & Sorting</h3>
								<p>
									Follicles are carefully extracted from the
									donor area, counted, and sorted in a growth
									solution to ensure viability.
								</p>
							</div>
							<div className="process-item animate-on-scroll">
								<h3>Implantation</h3>
								<p>
									Follicles are implanted into the thinning
									areas following natural direction. Visible
									growth begins in 3-4 months.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section id="faq" className="section-padding">
					<div className="container faq-wrapper animate-on-scroll">
						<h2 className="text-center">
							Frequently Asked Questions
						</h2>

						<details>
							<summary>
								Is the transplanted hair permanent?
							</summary>
							<div className="faq-content">
								<p>
									Yes, transplanted hair is permanent. It is
									taken from the "safe zone" at the back of
									the scalp, which contains follicles that are
									genetically resistant to hair loss hormones.
								</p>
							</div>
						</details>

						<details>
							<summary>Is the procedure painful?</summary>
							<div className="faq-content">
								<p>
									No, the procedure is performed under local
									anaesthesia. You may feel a slight prick
									during the injection, but the rest of the
									procedure is virtually pain-free and
									comfortable.
								</p>
							</div>
						</details>

						<details>
							<summary>
								How long until I see full results?
							</summary>
							<div className="faq-content">
								<p>
									New growth typically begins in 3-4 months.
									You will see significant improvement by 6
									months, with full, natural results appearing
									between 9 and 12 months post-procedure.
								</p>
							</div>
						</details>

						<details>
							<summary>
								Can women undergo hair transplantation?
							</summary>
							<div className="faq-content">
								<p>
									Yes, hair transplants are effective for both
									men and women. We specialize in female hair
									line lowering and volume restoration
									techniques suited for female pattern
									thinning.
								</p>
							</div>
						</details>
					</div>
				</section>
				<a
					href="https://wa.me/919000572727"
					className="whatsapp-float"
					target="_blank"
					aria-label="Chat on WhatsApp"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
						alt="WhatsApp"
					/>
				</a>
			</main>

			<footer id="contact" className="footer">
				<div className="container">
					<div className="footer-grid">
						<div className="animate-on-scroll footerContent">
							<h4>Layers Clinics</h4>
							<p>
								Experience the perfect blend of science, safety,
								and aesthetics. From hair loss to body
								contouring, your transformation begins with us.
							</p>
						</div>
						<div className="animate-on-scroll delay-100">
							<h4>Contact Us</h4>
							<ul className="footer-links">
								<li>
									<strong>Phone:</strong>
									<a href="tel:+919000572727">
										+91 9000 572727
									</a>
								</li>
								<li>
									<strong>Email:</strong>
									<a href="mailto:info@layersclinics.com">
										info@layersclinics.com
									</a>
								</li>
								<li>
									<strong>WhatsApp:</strong>
									<a href="https://wa.me/919000572727">
										Chat with Us
									</a>
								</li>
							</ul>
						</div>
						<div className="animate-on-scroll footerContent delay-200">
							<h4>Location</h4>
							<p>
								Pan-India Presence with branches in major
								cities. Find your nearest expert dermatologist
								today.
							</p>
						</div>
					</div>
					<div className="copyright">
						<p>
							© 2025 Layers Clinics. All rights reserved. |
							<a href="#">Privacy Policy</a> |
							<a href="#">Terms &amp; Conditions</a>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default HomePage;
