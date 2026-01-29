fetch("data/index.json")
  .then(r => r.json())
  .then(data => {
    const lista = document.getElementById("lista-artigos");

    data.categorias.forEach(cat => {
      const h2 = document.createElement("h2");
      h2.textContent = cat.nome;
      lista.appendChild(h2);

      data.artigos
        .filter(a => a.categoria === cat.id)
        .forEach(a => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="artigo.html?slug=${a.slug}">${a.titulo}</a>`;
          lista.appendChild(li);
        });
    });
  });
