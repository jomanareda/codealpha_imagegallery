let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const galleryImages = document.querySelectorAll('.gallery-item img');
  images = Array.from(galleryImages); 
  currentIndex = images.findIndex(img => img.src === imgElement.src);

  document.getElementById('lightbox-img').src = images[currentIndex].src;
  document.getElementById('lightbox').style.display = 'block';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function navigate(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1; 
  } else if (currentIndex >= images.length) {
    currentIndex = 0; 
  }

  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

document.addEventListener("keydown", function(event) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.style.display === 'block') {
    if (event.key === 'ArrowRight') {
      navigate(1);
    } else if (event.key === 'ArrowLeft') {
      navigate(-1);
    } else if (event.key === 'Escape') {
      closeLightbox();
    }
  }
});

function filterImages(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
