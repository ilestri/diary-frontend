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

  // 연인 해제 입력 모달 요소
  const unlinkModal = document.getElementById("unlinkModal");
  const closeUnlinkModal = document.getElementById("closeUnlinkModal");
  const btnUnlink = document.getElementById("btnUnlink");
  const btnConfirmUnlink = document.getElementById("btnConfirmUnlink");
  const btnCancelUnlink = document.getElementById("btnCancelUnlink");

  // 확인 모달 요소
  const confirmUnlinkModal = document.getElementById("confirmUnlinkModal");
  const closeConfirmModal = document.getElementById("closeConfirmModal");
  const btnDelete = document.getElementById("btnDelete");
  const btnCancel = document.getElementById("btnCancel");

  // 설정 버튼 클릭 시 환경설정 모달 열기
  btnSetting.onclick = function () {
    modal.style.display = "block";
  };

  // 모달 닫기 버튼 클릭 시 환경설정 모달 닫기
  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  // 모달 외부 클릭 시 모달 닫기
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == unlinkModal) {
      unlinkModal.style.display = "none";
      modal.style.display = "block"; // 환경설정 모달 다시 열기
    } else if (event.target == confirmUnlinkModal) {
      confirmUnlinkModal.style.display = "none";
      unlinkModal.style.display = "block"; // 입력 모달 다시 열기
    }
  };

  // "연인 해제" 버튼 클릭 시 입력 모달 열기
  btnUnlink.onclick = function () {
    modal.style.display = "none"; // 환경설정 모달 닫기
    unlinkModal.style.display = "block"; // 연인 해제 입력 모달 열기
  };

  // 입력 모달 닫기 버튼 클릭 시
  closeUnlinkModal.onclick = function () {
    unlinkModal.style.display = "none"; // 입력 모달 닫기
    modal.style.display = "block"; // 환경설정 모달 다시 열기
  };

  // 확인 버튼 클릭 시 재확인 모달 열기
  btnConfirmUnlink.onclick = function () {
    unlinkModal.style.display = "none"; // 입력 모달 닫기
    confirmUnlinkModal.style.display = "block"; // 확인 모달 열기
  };

  // 확인 모달 닫기 버튼 클릭 시
  closeConfirmModal.onclick = function () {
    confirmUnlinkModal.style.display = "none"; // 확인 모달 닫기
    unlinkModal.style.display = "block"; // 입력 모달 다시 열기
  };

  // 삭제 버튼 클릭 시
  btnDelete.onclick = function () {
    // 실제 삭제 로직을 여기에 추가
    alert("연인이 해제되었습니다."); // 예시 알림
    confirmUnlinkModal.style.display = "none"; // 확인 모달 닫기
  };

  // 취소 버튼 클릭 시
  btnCancel.onclick = function () {
    confirmUnlinkModal.style.display = "none"; // 확인 모달 닫기
    unlinkModal.style.display = "block"; // 입력 모달 다시 열기
  };

  // 취소 버튼 클릭 시 입력 모달 닫기
  btnCancelUnlink.onclick = function () {
    unlinkModal.style.display = "none"; // 입력 모달 닫기
    modal.style.display = "block"; // 환경설정 모달 다시 열기
  };

  // 초기 상태 설정
  function initializeModals() {
    modal.style.display = "none"; // 기본적으로 환경설정 모달을 숨김
    unlinkModal.style.display = "none"; // 연인 해제 입력 모달을 숨김
    confirmUnlinkModal.style.display = "none"; // 확인 모달을 숨김
  }

  // 페이지 로드 시 모달 초기화
  window.onload = initializeModals;
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
        i.style.marginBottom = "15px"; // 기본 여백으로 되돌리기
      });

      // 클릭한 서브 메뉴 열기/닫기
      if (!isOpen) {
        subMenu.classList.add("show");
        this.classList.add("open");

        // 서브 메뉴의 항목 수를 기반으로 여백 조정
        const subMenuItems = subMenu.querySelectorAll("li").length;
        const additionalMargin = subMenuItems * 30; // 각 항목당 10px 추가
        this.style.marginBottom = `${15 + additionalMargin}px`; // 기본 여백 + 추가 여백
      }
    });
  });
});
