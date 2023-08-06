window.onload = function() {
  // Abrir e fechar o menu com o clique no botão Menu
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", function() {
    menu.classList.toggle("-active");
  });

  // Play do vídeo ao clicar na imagem de capa
  const videoCover = document.getElementById("video-cover");
  const videoPlayer = document.getElementById("video-player");

  videoCover.addEventListener("click", function() {
    videoCover.classList.add("-inactive");
    videoPlayer.play();
  });

  // Play do vídeo ao clicar na imagem de capa
  const accordionItems = document.querySelectorAll(".item");

  accordionItems.forEach(function(item) {
    const title = item.querySelector(".title");
    const description = item.querySelector(".description");

    title.addEventListener("click", function() {
      item.classList.toggle("-active");
    });
  });

  // Play do vídeo ao clicar na imagem de capa
  const extract = document.querySelector(".extract");
  const buttonModal = document.getElementById("button-modal");

  buttonModal.addEventListener("click", function() {
    fetch("https://catfact.ninja/fact")
      .then(response => response.json())
      .then(data => {
        extract.textContent = data.fact;
      });
  });

  // Abrir modal com a foto e fazer função no botão de fechar
  const modalWiki = document.querySelector(".modal-wiki");
  const closeModal = document.querySelector(".close-modal");

  buttonModal.addEventListener("click", function() {
    modalWiki.classList.add("modal-wiki-active");
  });

  closeModal.addEventListener("click", function() {
    modalWiki.classList.remove("modal-wiki-active");
  });
};
