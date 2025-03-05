document.addEventListener("DOMContentLoaded", () => {
    const tabContainers = document.querySelectorAll(".tabs");
  
    tabContainers.forEach((tabs) => {
      const tabButtons = tabs.querySelectorAll(".tab");
      const tabContents = tabs.querySelectorAll(".tab__content");
  
      tabButtons.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          tabButtons.forEach((t) => t.classList.remove("tab_active"));
          tabContents.forEach((c) => c.classList.remove("tab__content_active"));
          tab.classList.add("tab_active");
          tabContents[index].classList.add("tab__content_active");
        });
      });
    });
  });