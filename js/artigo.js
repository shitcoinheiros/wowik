const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

fetch("data/index.json")
  .then(r => r.json())
  .then(data => {
    const artigo = data.artigos.find(a => a.slug === slug);

    if (!artigo) {
      document.getElementById("conteudo").innerHTML = "Artigo não encontrado";
      return;
    }

    fetch(artigo.arquivo)
      .then(r => r.text())
      .then(md => {
        document.getElementById("conteudo").innerHTML =
          markdownToHtml(md);
      });
  })
  .catch(err => {
    console.error("Erro ao carregar artigo:", err);
  });
