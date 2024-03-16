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

for (let i = 0; i < imageUrlsFendi.length; i++) {
    const imageLink = createImageLink(
        imageUrlsFendi[i],
        captionsFendi[i] || null
    );
    gallery.appendChild(imageLink);
    container.append(gallery);
}
