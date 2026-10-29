document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      links.classList.toggle("is-open", !expanded);
    });
    links.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("is-open");
    }));
  }
  document.addEventListener("keydown", event => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
      const search = document.getElementById("project-search");
      if (search) { event.preventDefault(); search.focus(); }
    }
  });

  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    // GANTI dengan alamat email yang memang ingin kamu tampilkan secara publik.
    const recipient = "GANTI_DENGAN_EMAIL_KAMU@example.com";
    if (recipient.includes("GANTI_DENGAN")) {
      document.getElementById("form-note").textContent = "Atur alamat email tujuan terlebih dahulu di assets/js/main.js.";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Pesan portofolio dari ${data.get("name")}`);
    const body = encodeURIComponent(`Nama: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
});
