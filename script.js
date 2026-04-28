const currentPage = document.body.dataset.page;
const nav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");

if (nav && currentPage) {
  const pageMap = {
    home: "index.html",
    business: "business.html",
    company: "company.html",
    contact: "contact.html"
  };

  nav.querySelectorAll("a").forEach((link) => {
    if (link.getAttribute("href") === pageMap[currentPage]) {
      link.classList.add("is-active");
    }
  });
}

if (nav && menuToggle) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formMessage.textContent = "未入力の必須項目があります。内容をご確認ください。";
      return;
    }

    formMessage.textContent = "送信確認用の仮メッセージです。実運用時は送信先を接続してください。";
    contactForm.reset();
  });
}
