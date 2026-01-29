
fetch("data/index.json")
  .then(r => r.json())
  .then(artigos => {
    const lista = document.getElementById("lista-artigos");

    artigos.forEach(a => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="artigo.html?slug=${a.slug}">${a.titulo}</a>`;
      lista.appendChild(li);
    });
  });
