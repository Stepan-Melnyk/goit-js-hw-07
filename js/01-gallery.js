import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainerEl = document.querySelector('.gallery');

function createGalleryItems({ preview, original, description }) {
  return galleryContainerEl.insertAdjacentHTML(
    'beforeend',
    `
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    `
  )
};

galleryItems.map(createGalleryItems).join("");

galleryContainerEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if(event.target.nodeName !== 'IMG') {
    return;
  }

  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

const instance = basicLightbox.create(
  `<img class="modal__image"/>`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscClick);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscClick);
    },
  }
);

function onEscClick(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}