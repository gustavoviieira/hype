function createImageLink(imageUrl, caption) {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.dataset.lightbox = "models"; // Assuming you have a lightbox library
    if (caption) {
        link.dataset.title = caption;
    }

    const image = document.createElement("img");
    image.src = imageUrl;

    link.appendChild(image);
    return link;
}

function showImage() {
    const container = document.querySelector(".container");
    const gallery = document.querySelector(".gallery");
    for (let i = 0; i < imageUrlsBalenciaga.length; i++) {
        const imageLink = createImageLink(
            imageUrlsBalenciaga[i],
            captionsBalenciaga[i] || null
        );
        gallery.appendChild(imageLink);
        container.append(gallery);
    }
}

function voltaPage() {
    document
        .getElementById("voltar-page")
        .addEventListener("click", function () {
            window.history.back(); // Volta para a página anterior
        });
}

function blockDonwload() {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });
}

blockDonwload()
showImage();
voltaPage();
