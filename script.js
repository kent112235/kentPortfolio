document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-toggle');  // Select the burger button
  const nav = document.querySelector('.navbar-menu');  // Select the navbar menu

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');  // Toggle the 'active' class on the navbar menu
    burger.classList.toggle('toggle');  // Toggle the 'toggle' class on the burger button
  });
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
