 
  /* JavaScript for Navigation Burger */
  const burger = document.createElement('div');
  burger.classList.add('burger');
  burger.innerHTML = '<span></span><span></span><span></span>';
  document.querySelector('header').prepend(burger);
  
  const nav = document.querySelector('.navigation');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });


  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    // Function to show toast message
    function showToast(message, success = true) {
      toast.textContent = message;
      toast.style.backgroundColor = success ? '#4caf50' : '#f44336'; // Green for success, red for error
      toast.classList.add('show');

    }}
  );
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
  }

  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }