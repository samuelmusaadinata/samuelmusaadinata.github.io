document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("project-detail");
  if (!root || typeof PROJECTS === "undefined") return;
  const id = new URLSearchParams(window.location.search).get("id");
  const project = PROJECTS.find(item => item.id === id);
  if (!project) {
    document.title = "Proyek Tidak Ditemukan | Samuel Musa Adinata";
    root.innerHTML = `<p class="eyebrow">PROJECT FILE</p><h1>Proyek tidak ditemukan.</h1><p class="hero-lead">Pilih proyek dari galeri untuk melihat detailnya.</p><a class="button button-primary" href="projects.html">Kembali ke proyek</a>`;
    return;
  }
  document.title = `${project.title} | Samuel Musa Adinata`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = project.summary;
  const tags = project.technologies.map(t => `<span>${t}</span>`).join("");
  const highlights = project.highlights.map(h => `<li>${h}</li>`).join("");
  const categories = project.category.map(c => `<span class="mini-tag">${categoryLabel(c)}</span>`).join("");
  const links = `<div class="hero-actions">${project.github ? `<a class="button button-primary" href="${project.github}" target="_blank" rel="noopener noreferrer">Lihat GitHub ↗</a>` : ""}${project.demo ? `<a class="button button-secondary" href="${project.demo}" target="_blank" rel="noopener noreferrer">Buka demo ↗</a>` : ""}</div>`;
  root.innerHTML = `
    <p class="eyebrow">PROJECT FILE / ${project.year}</p><div class="mini-tags">${categories}<span class="mini-tag">${project.status}</span></div>
    <h1>${project.title}</h1><p class="detail-lead">${project.summary}</p>
    <img class="detail-image" src="${project.image}" alt="${project.imageAlt}" width="960" height="600">
    <div class="detail-columns"><div><h2>Tentang proyek</h2><p>${project.description}</p><h2>Fokus pengembangan</h2><ul class="highlight-list">${highlights}</ul></div><aside class="detail-sidebar"><p class="eyebrow">TECH STACK</p><div class="tag-list">${tags}</div><hr><p class="eyebrow">STATUS</p><p>${project.status}</p><p class="muted">Status ini menggambarkan tahap pengerjaan saat portofolio diperbarui.</p></aside></div>${links}`;
});
