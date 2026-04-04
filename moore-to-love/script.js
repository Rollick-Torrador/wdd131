/*Navigation Section*/
const navLinks = [
  { text: "Home", href: "home.html" },
  { text: "Contact Us", href: "contact-us.html" }
];

function buildNavigation() {
  const nav = document.getElementById("siteNav");
  const toggleButton = document.getElementById("menuToggle");

  if (!nav) return;

  const currentPage = window.location.pathname.split("/").pop() || "home.html";

  nav.innerHTML = "";

  navLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.classList.add("nav-link");

    if (link.href === currentPage) {
      a.classList.add("active");
      a.setAttribute("aria-current", "page");
    }

    nav.appendChild(a);
  });

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
}

document.addEventListener("DOMContentLoaded", buildNavigation);

/*Home Section*/
const therapists = [
  {
    id: "audrey",
    name: "Audrey Moore",
    image: "images/audrey-moore-headshot.png",
    alt: "Audrey Moore headshot",
    specialty: "EMDR and couples therapy",
    description:
      "Audrey Moore is our founder. She is EMDR certified and works primarily with married couples."
  },
  {
    id: "shelly",
    name: "Shelly Morrison",
    image: "images/shelly-morrison-headshot.jpg",
    alt: "Shelly Morrison headshot",
    specialty: "ART therapy and family relationships",
    description:
      "Shelly works primarily with younger families and uses ART therapy to help repair relationships that need a special touch."
  },
  {
    id: "jason",
    name: "Jason Conchake",
    image: "images/jason-conchake-headshot.jpg",
    alt: "Jason Conchake headshot",
    specialty: "CBT therapy",
    description:
      "Jason has over thirty years in the industry and specializes in CBT therapy. He helps people stretch out of their comfort zones to reach new heights."
  }
];

function renderTherapistCard(therapist) {
  const card = document.getElementById("therapistCard");

  card.innerHTML = `
    <div class="therapist-card-image">
      <img src="${therapist.image}" alt="${therapist.alt}">
    </div>
    <div class="therapist-card-content">
      <h3>${therapist.name}</h3>
      <p class="therapist-specialty"><strong>Specialty:</strong> ${therapist.specialty}</p>
      <p>${therapist.description}</p>
    </div>
  `;
}

function renderTherapistButtons() {
  const buttonContainer = document.getElementById("therapistButtons");
  if (!buttonContainer) return;

  therapists.forEach((therapist, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "therapist-button";
    button.textContent = therapist.name;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", index === 0 ? "true" : "false");

    if (index === 0) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      document.querySelectorAll(".therapist-button").forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      renderTherapistCard(therapist);
    });

    buttonContainer.appendChild(button);
  });

  renderTherapistCard(therapists[0]);
}

document.addEventListener("DOMContentLoaded", renderTherapistButtons);

/*contact-us Section*/
function handleContactForm() {
  const form = document.getElementById("contactForm");
  const errorBox = document.getElementById("formError");
  const resultSection = document.getElementById("submissionResult");
  const previewContent = document.getElementById("previewContent");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    errorBox.textContent = "";

    const name = document.getElementById("name").value.trim();
    const partnerName = document.getElementById("partnerName").value.trim();
    const contactMethod = document.getElementById("contactMethod").value.trim();
    const therapistPreference = document.getElementById("therapistPreference").value;
    const availability = document.getElementById("availability").value.trim();
    const message = document.getElementById("msg").value.trim();

    if (!name || !contactMethod || !message) {
      errorBox.textContent = "Please fill in your name, contact information, and message.";
      return;
    }

    resultSection.classList.remove("hidden");

    previewContent.innerHTML = `
      <p><strong>Your Name:</strong> ${name}</p>
      <p><strong>Partner Name:</strong> ${partnerName || "Not provided"}</p>
      <p><strong>Contact Information:</strong> ${contactMethod}</p>
      <p><strong>Preferred Therapist:</strong> ${therapistPreference || "No preference"}</p>
      <p><strong>Availability:</strong> ${availability || "Not provided"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
    form.classList.add("hidden");
    resultSection.scrollIntoView({ behavior: "smooth" });
  });
}

document.addEventListener("DOMContentLoaded", handleContactForm);