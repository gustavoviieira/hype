const container = document.querySelector(".container");
const gallery = document.querySelector(".gallery");

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

for (let i = 0; i < imageUrlsDior.length; i++) {
    const imageLink = createImageLink(
        imageUrlsDior[i],
        captionsDior[i] || null
    );
    gallery.appendChild(imageLink);
    container.append(gallery);
}
document.getElementById("voltar-page").addEventListener("click", function () {
    window.history.back(); // Volta para a página anterior
});
