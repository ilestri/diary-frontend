document.addEventListener("DOMContentLoaded", function () {
   const btnNav = document.querySelector(".btn_nav");
   const navMenu = document.querySelector(".nav_menu");
   const overlay = document.querySelector(".overlay");
   const mainLayout = document.querySelector(".main-layout");

   btnNav.addEventListener("click", () => {
      const isNavMenuVisible = navMenu.style.display === "flex";
      navMenu.style.display = isNavMenuVisible ? "none" : "flex";

      if (isNavMenuVisible) {
         overlay.style.display = "none"; // 숨김 처리
         mainLayout.classList.remove("overlay-active");
      } else {
         overlay.style.display = "block"; // 활성화 시 보이도록 설정
         requestAnimationFrame(() => {
            mainLayout.classList.add("overlay-active");
         });
      }
   });

   overlay.addEventListener("click", () => {
      navMenu.style.display = "none";
      overlay.style.display = "none";
      mainLayout.classList.remove("overlay-active");
   });

   // 모달 요소
   const modal = document.getElementById("settingsModal");
   const btnSetting = document.querySelector(".btn_setting");
   const closeModal = document.getElementById("closeModal");

   // 설정 버튼 클릭 시 모달 열기
   btnSetting.onclick = function () {
      modal.style.display = "block";
   };

   // 모달 닫기 버튼 클릭 시 모달 닫기
   closeModal.onclick = function () {
      modal.style.display = "none";
   };

   // 모달 외부 클릭 시 모달 닫기
   window.onclick = function (event) {
      if (event.target == modal) {
         modal.style.display = "none";
      }
   };
});

document.addEventListener("DOMContentLoaded", function () {
   const navItems = document.querySelectorAll(".nav_item");

   navItems.forEach((item) => {
      item.addEventListener("click", function () {
         const subMenu = this.querySelector(".sub_menu");
         const isOpen = subMenu.classList.contains("show");

         // 모든 서브 메뉴 닫기
         navItems.forEach((i) => {
            i.querySelector(".sub_menu").classList.remove("show");
            i.classList.remove("open");
         });

         // 클릭한 서브 메뉴 열기/닫기
         if (!isOpen) {
            subMenu.classList.add("show");
            this.classList.add("open");
         }
      });
   });
});
