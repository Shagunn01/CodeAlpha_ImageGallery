const images = document.querySelectorAll(".image-box img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
  currentIndex = [...images].findIndex(img => img.src === src);
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function prevImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function nextImage(e) {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function filterImages(category) {
  const boxes = document.querySelectorAll(".image-box");
  boxes.forEach(box => {
    if (category === 'all' || box.classList.contains(category)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}
