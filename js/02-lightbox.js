import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerEl = document.querySelector('.gallery');

function createGalleryItems({ preview, original, description }) {
  return galleryContainerEl.insertAdjacentHTML(
    'beforeend',
    `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    `
  )
};

galleryItems.map(createGalleryItems).join("");

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });