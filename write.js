document.addEventListener('DOMContentLoaded', function () {
   const btnNav = document.querySelector('.btn_nav');
   const body = document.body;

   btnNav.addEventListener('hover', function (event) {
      event.preventDefault();
      body.classList.toggle('nav-open');
   });
});
