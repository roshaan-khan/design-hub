const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});


// Animate the counter values
function animateCounters() {
    const clientsCount = 100; // Replace with the actual number of clients
    const logosCount = 300; // Replace with the actual number of logos made
    const bannersCount = 200; // Replace with the actual number of banners made
  
    const clientsElement = document.getElementById('clients-count');
    const logosElement = document.getElementById('logos-count');
    const bannersElement = document.getElementById('banners-count');
  
    let currentClientsCount = 0;
    let currentLogosCount = 0;
    let currentBannersCount = 0;
  
    const interval = setInterval(() => {
      if (currentClientsCount === clientsCount && currentLogosCount === logosCount && currentBannersCount === bannersCount) {
        clearInterval(interval); // Stop the counter animation
        return;
      }
  
      if (currentClientsCount < clientsCount) {
        currentClientsCount++;
        clientsElement.textContent = currentClientsCount;
      }
  
      if (currentLogosCount < logosCount) {
        currentLogosCount++;
        logosElement.textContent = currentLogosCount;
      }
  
      if (currentBannersCount < bannersCount) {
        currentBannersCount++;
        bannersElement.textContent = currentBannersCount;
      }
    }, 10); // Change the duration of the animation (in milliseconds) as desired
  }
  
  // Call the function to animate the counters
  animateCounters();


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
  
  
  
  