document.addEventListener('DOMContentLoaded', function () {
   const btnNav = document.querySelector('.btn_nav');
   const sideNav = document.querySelector('.side-nav');
   const overlay = document.querySelector('.overlay');

   btnNav.addEventListener('click', function () {
      sideNav.classList.toggle('active');
      overlay.classList.toggle('active');
   });

   overlay.addEventListener('click', function () {
      sideNav.classList.remove('active');
      overlay.classList.remove('active');
   });
});
