const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

fetch("data/index.json")
  .then(r => r.json())
  .then(artigos => {
    const artigo = artigos.find(a => a.slug === slug);
    return fetch(artigo.arquivo);
  })
  .then(r => r.text())
  .then(md => {
    document.getElementById("conteudo").innerHTML = markdownToHtml(md);
  });
