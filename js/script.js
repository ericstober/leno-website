document.addEventListener('DOMContentLoaded', () => {
  // Toggle mobile menu with hamburger button
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  // Video modal
  const modal = document.querySelector('#videoModal');
  const videoPlayer = document.querySelector('#videoPlayer');
  const playButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');

  // Open modal when play button clicked
  playButton.addEventListener('click', () => {
    // Show modal
    modal.style.display = 'block';

    // Replace the video src attribute with the video url
    videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';

    // Close modal close button click
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      videoPlayer.src = '';
    });

    // Close modal on click outside of modal
    window.addEventListener('click', (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
      }
    });
  });
});

// Add background to nav on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');

  if (this.window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});
