document.addEventListener("DOMContentLoaded", function () {
  const btnNav = document.querySelector(".btn_nav");
  const navMenu = document.querySelector(".nav_menu");
  const overlay = document.querySelector(".overlay");
  const mainLayout = document.querySelector(".main-layout");

  btnNav.addEventListener("click", () => {
    const isNavMenuVisible = navMenu.style.display === "flex";
    navMenu.style.display = isNavMenuVisible ? "none" : "flex";

    if (isNavMenuVisible) {
      overlay.style.display = "none";
      mainLayout.classList.remove("overlay-active");
    } else {
      overlay.style.display = "block";
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

  const btnNotice = document.querySelector(".btn_notice");
  const notificationPanel = document.getElementById("notificationPanel");
  const notificationOverlay = document.getElementById("notificationOverlay");
  const closeNotice = document.getElementById("closeNotice");

  btnNotice.addEventListener("click", () => {
    const isNotificationVisible = notificationPanel.style.display === "block";
    notificationPanel.style.display = isNotificationVisible ? "none" : "block";

    if (isNotificationVisible) {
      notificationOverlay.style.display = "none";
    } else {
      notificationOverlay.style.display = "block";
    }
  });

  const closeNotification = () => {
    notificationPanel.style.display = "none";
    notificationOverlay.style.display = "none";
  };

  notificationOverlay.addEventListener("click", closeNotification);

  closeNotice.addEventListener("click", closeNotification);

  const modal = document.getElementById("settingsModal");
  const btnSetting = document.querySelector(".btn_setting");
  const closeModal = document.getElementById("closeModal");

  const unlinkModal = document.getElementById("unlinkModal");
  const closeUnlinkModal = document.getElementById("closeUnlinkModal");
  const btnUnlink = document.getElementById("btnUnlink");
  const btnConfirmUnlink = document.getElementById("btnConfirmUnlink");
  const btnCancelUnlink = document.getElementById("btnCancelUnlink");

  const confirmUnlinkModal = document.getElementById("confirmUnlinkModal");
  const closeConfirmModal = document.getElementById("closeConfirmModal");
  const btnDelete = document.getElementById("btnDelete");
  const btnCancel = document.getElementById("btnCancel");

  btnSetting.onclick = function () {
    modal.style.display = "block";
  };

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == unlinkModal) {
      unlinkModal.style.display = "none";
      modal.style.display = "block";
    } else if (event.target == confirmUnlinkModal) {
      confirmUnlinkModal.style.display = "none";
      unlinkModal.style.display = "block";
    }
  };

  btnUnlink.onclick = function () {
    modal.style.display = "none";
    unlinkModal.style.display = "block";
  };

  closeUnlinkModal.onclick = function () {
    unlinkModal.style.display = "none";
    modal.style.display = "block";
  };

  btnConfirmUnlink.onclick = function () {
    unlinkModal.style.display = "none";
    confirmUnlinkModal.style.display = "block";
  };

  closeConfirmModal.onclick = function () {
    confirmUnlinkModal.style.display = "none";
    unlinkModal.style.display = "block";
  };

  btnDelete.onclick = function () {
    alert("연인이 해제되었습니다.");
    confirmUnlinkModal.style.display = "none";
  };

  btnCancel.onclick = function () {
    confirmUnlinkModal.style.display = "none";
    unlinkModal.style.display = "block";
  };

  btnCancelUnlink.onclick = function () {
    unlinkModal.style.display = "none";
    modal.style.display = "block";
  };

  function initializeModals() {
    modal.style.display = "none";
    unlinkModal.style.display = "none";
    confirmUnlinkModal.style.display = "none";
  }

  window.onload = initializeModals;
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav_item");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      const subMenu = this.querySelector(".sub_menu");
      const isOpen = subMenu.classList.contains("show");

      navItems.forEach((i) => {
        i.querySelector(".sub_menu").classList.remove("show");
        i.classList.remove("open");
        i.style.marginBottom = "15px";
      });

      if (!isOpen) {
        subMenu.classList.add("show");
        this.classList.add("open");

        const subMenuItems = subMenu.querySelectorAll("li").length;
        const additionalMargin = subMenuItems * 30;
        this.style.marginBottom = `${15 + additionalMargin}px`;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnNotice = document.querySelector(".btn_notice");
  const notificationOverlay = document.getElementById("notificationOverlay");
  const notificationPanel = document.getElementById("notificationPanel");
  const closeNotification = document.getElementById("closeNotification");

  btnNotice.addEventListener("click", function () {
    notificationOverlay.style.display = "block";
    notificationPanel.classList.add("show");
  });

  closeNotification.addEventListener("click", function () {
    notificationOverlay.style.display = "none";
    notificationPanel.classList.remove("show");
  });

  notificationOverlay.addEventListener("click", function () {
    this.style.display = "none";
    notificationPanel.classList.remove("show");
  });
});
