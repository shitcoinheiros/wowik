fetch("data/index.json")
  .then(r => r.json())
  .then(data => {
    const lista = document.getElementById("lista-artigos");

    data.artigos.forEach(a => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="artigo.html?slug=${a.slug}">
          ${a.titulo}
        </a>
        <small> — ${a.resumo}</small>
      `;
      lista.appendChild(li);
    });
  })
  .catch(err => {
    console.error("Erro ao carregar artigos:", err);
  });
