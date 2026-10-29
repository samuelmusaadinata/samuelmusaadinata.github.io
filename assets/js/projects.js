/* Data proyek: perbarui status, tautan, gambar, dan deskripsi sesuai kondisi nyata. */
const PROJECTS = [
  {
    id: "robot-arm",
    title: "Lengan Robot Berbasis ESP32",
    category: ["robotics", "embedded"],
    status: "Eksperimen aktif",
    year: "2026",
    summary: "Prototipe lengan robot tiga servo dengan kontrol berbasis ESP32 dan antarmuka lokal.",
    description: "Proyek ini mengeksplorasi kontrol aktuator menggunakan ESP32. Sistem awal menggunakan tiga servo untuk menggerakkan bagian lengan dan basis. Tahap pengembangan berikutnya dapat mencakup pencatatan gerakan, visualisasi 3D, dan integrasi computer vision setelah masing-masing fitur benar-benar diuji.",
    technologies: ["ESP32", "Servo", "Arduino/C++", "Web UI"],
    image: "assets/images/robot-arm.svg",
    imageAlt: "Ilustrasi rangkaian lengan robot",
    highlights: ["Kontrol tiga servo", "Antarmuka kontrol lokal", "Eksplorasi visualisasi gerakan"],
    github: "https://github.com/samuelmusaadinata",
    demo: "",
    featured: true
  },
  {
    id: "environment-monitor",
    title: "Sistem Monitoring Lingkungan",
    category: ["iot", "embedded"],
    status: "Prototipe",
    year: "2026",
    summary: "Pemantauan kualitas udara, suhu, dan kelembapan menggunakan ESP32 dan beberapa sensor.",
    description: "Prototipe menggabungkan sensor lingkungan, layar TFT, dan ESP32. Data direncanakan untuk dicatat melalui webhook ke Google Sheets agar perubahan dapat dipantau. Nilai sensor perlu dikalibrasi dan dibandingkan dengan alat referensi sebelum dipakai untuk klaim pengukuran yang akurat.",
    technologies: ["ESP32", "PMS5003", "DHT22", "MQ-135", "ST7789", "Google Sheets"],
    image: "assets/images/iot-monitor.svg",
    imageAlt: "Ilustrasi dashboard monitoring sensor",
    highlights: ["Integrasi beberapa sensor", "Tampilan data pada layar", "Rencana pencatatan data ke cloud"],
    github: "https://github.com/samuelmusaadinata",
    demo: "",
    featured: true
  },
  {
    id: "physics-inventory",
    title: "Inventaris Laboratorium Fisika",
    category: ["web"],
    status: "Publik",
    year: "2025",
    summary: "Situs inventaris untuk mencari peralatan laboratorium dengan filter jenis dan lokasi.",
    description: "Aplikasi web ini membantu pengguna menelusuri daftar alat dan bahan laboratorium melalui tabel pencarian serta filter. Versi publik dapat dilihat melalui GitHub Pages. Pengembangan lanjutan dapat berfokus pada pengalaman pengguna, kejelasan status peminjaman, dan pemeliharaan data.",
    technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Chart.js"],
    image: "assets/images/inventory-web.svg",
    imageAlt: "Ilustrasi tabel inventaris web",
    highlights: ["Pencarian inventaris", "Filter jenis dan lokasi", "Publikasi dengan GitHub Pages"],
    github: "https://github.com/samuelmusaadinata",
    demo: "https://webumfisika.github.io/Inventory-of-Physics-Laboratory/",
    featured: true
  }
];

function categoryLabel(category) {
  return ({ robotics: "Robotika", iot: "IoT", web: "Web Development", embedded: "Embedded Systems" })[category] || category;
}

function projectCard(project) {
  const tags = project.category.map(cat => `<span class="mini-tag">${categoryLabel(cat)}</span>`).join("");
  return `<article class="project-card">
    <a class="project-image-link" href="project.html?id=${encodeURIComponent(project.id)}" aria-label="Buka detail ${project.title}">
      <img class="project-image" src="${project.image}" alt="${project.imageAlt}" loading="lazy" width="640" height="420">
      <span class="image-arrow" aria-hidden="true">↗</span>
    </a>
    <div class="project-card-body"><div class="project-card-meta"><span>${project.status}</span><span>${project.year}</span></div>
    <h3><a href="project.html?id=${encodeURIComponent(project.id)}">${project.title}</a></h3><p>${project.summary}</p>
    <div class="mini-tags">${tags}</div><a class="text-link project-more" href="project.html?id=${encodeURIComponent(project.id)}">Lihat detail <span aria-hidden="true">→</span></a></div>
  </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const featured = document.getElementById("featured-projects");
  if (featured) featured.innerHTML = PROJECTS.filter(p => p.featured).map(projectCard).join("");

  const all = document.getElementById("all-projects");
  if (!all) return;
  const search = document.getElementById("project-search");
  const filters = document.getElementById("project-filters");
  const count = document.getElementById("results-count");
  const empty = document.getElementById("empty-state");
  let activeFilter = "all";

  function render() {
    const query = search.value.trim().toLowerCase();
    const visible = PROJECTS.filter(p => {
      const matchesFilter = activeFilter === "all" || p.category.includes(activeFilter);
      const haystack = [p.title, p.summary, p.description, p.status, ...p.technologies, ...p.category].join(" ").toLowerCase();
      return matchesFilter && haystack.includes(query);
    });
    all.innerHTML = visible.map(projectCard).join("");
    count.textContent = `${visible.length} proyek ditemukan`;
    empty.hidden = visible.length > 0;
    all.hidden = visible.length === 0;
  }
  search.addEventListener("input", render);
  filters.addEventListener("click", event => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    filters.querySelectorAll("button").forEach(b => {
      const active = b === button;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    render();
  });
  document.getElementById("reset-search").addEventListener("click", () => {
    search.value = "";
    activeFilter = "all";
    filters.querySelectorAll("button").forEach(b => {
      const active = b.dataset.filter === "all";
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", String(active));
    });
    render();
  });
  render();
});
