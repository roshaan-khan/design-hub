
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});







// fade in on scroll
  function fadeElementInOnLoad(element) {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('fade-in');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var fadeElements = document.querySelectorAll('.fade-in-element');
    
    fadeElements.forEach(function(element) {
      fadeElementInOnLoad(element);
    });
  });
  
  window.addEventListener('scroll', function() {
    var fadeElements = document.querySelectorAll('.fade-in-element');
    
    fadeElements.forEach(function(element) {
      fadeElementInOnLoad(element);
    });
  });
  

  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-button');
const gridItems = document.querySelectorAll('.grid-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    gridItems.forEach((item) => {
      const itemCategories = item.classList;

      if (filter === 'all') {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
        item.style.display = 'block';
      } else {
        if (itemCategories.contains(filter)) {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
          item.style.display = 'block';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.5)';
          item.style.display = 'none';
        }
      }
    });

    // Hide the headings of non-matching categories
    const headings = document.querySelectorAll('.section-heading');
    headings.forEach((heading) => {
      const headingCategory = heading.classList;

      if (filter === 'all' || headingCategory.contains(filter)) {
        heading.style.display = 'block';
      } else {
        heading.style.display = 'none';
      }
    });

    // Wait for the animation to complete before triggering the fade-in animation
    setTimeout(() => {
      gridItems.forEach((item) => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
      });
    }, 0);
  });
});

  
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};

// Function to smoothly scroll back to the top of the document
function scrollToTop() {
  const scrollToTop = window.setInterval(function() {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 50); // Adjust scroll speed here (smaller value = faster scroll)
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 5); // Adjust scroll interval here (smaller value = smoother scroll)
}
    

