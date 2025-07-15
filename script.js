window.addEventListener('DOMContentLoaded', () => {
    // Initialize all Lucide icons
    lucide.createIcons();
});

window.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const navbar = document.getElementById("navbar");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    let menuOpen = false;

    // Scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Toggle mobile menu
    mobileMenuBtn.addEventListener("click", () => {
        menuOpen = !menuOpen;
        mobileMenu.style.display = menuOpen ? "flex" : "none";
        mobileMenuBtn.innerHTML = menuOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';
        lucide.createIcons();
    });

    // Close menu on link click (mobile)
    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.style.display = "none";
            menuOpen = false;
            mobileMenuBtn.innerHTML = '<i data-lucide="menu"></i>';
            lucide.createIcons();
        });
    });

    // Placeholder for theme toggle
    document.querySelectorAll("#theme-toggle, #theme-toggle-mobile").forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Theme toggle not implemented yet.");
        });
    });
});

window.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});


window.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const trigger = document.querySelector(".accordion-trigger");
    const accordion = document.querySelector(".accordion");

    trigger.addEventListener("click", () => {
        accordion.classList.toggle("open");
    });
});

window.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});


const codingSkills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 80 },
    { name: "Frontend Development", level: 75 },
    { name: "3D (Blender & 3DS Max)", level: 70 },
    { name: "MS Office", level: 90 },
];

const softSkills = [
    { name: "Communication", level: 85 },
    { name: "Team Work", level: 90 },
    { name: "Problem Solving", level: 75 },
    { name: "Active Listener", level: 80 },
    { name: "Confidence", level: 85 },
];

function renderSkills(targetId, skills) {
    const container = document.getElementById(targetId);
    if (!container) return;

    container.innerHTML = skills.map(skill => `
    <div class="skill-item">
      <div class="skill-header">
        <span>${skill.name}</span>
        <span>${skill.level}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
    renderSkills("coding-skills", codingSkills);
    renderSkills("soft-skills", softSkills);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent!");
    this.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();





