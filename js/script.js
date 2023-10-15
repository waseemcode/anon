// Accordion Menu
const btns = document.querySelectorAll("[data-accordion-btn]");
const content = document.querySelectorAll(".sidebar-category__content");

document.querySelectorAll(".accordion-list").forEach((el) =>
  el.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-accordion-btn]");
    if (!btn) return;

    // Removing active from all the Headings
    btns.forEach((el) => {
      if (el !== btn && el.classList.contains("active")) {
        el.classList.remove("active");
      }
    });

    // Making the Selected Heading Active
    btn.classList.toggle("active");
  })
);

// Notification Closes
const notiBtn = document.querySelector(".notification__btn");

notiBtn.addEventListener("click", function (e) {
  notiBtn.closest(".notification").classList.add("close");
});

// Modal Close
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal__overlay");
const modalBtn = document.querySelector(".modal__btn");

[overlay, modalBtn].forEach((el) =>
  el.addEventListener("click", function (e) {
    modal.classList.add("close");
  })
);

//////////////////////
//////////////////////
// Mobile Menu
document.querySelector("[data-mobile-menu]").addEventListener("click", function (e) {
  document.querySelector(".mobile-menu").classList.toggle("active");
  document.querySelector(".mobile-overlay").classList.toggle("active");
});

// Close Btn
document.querySelectorAll("[data-close-btn]").forEach((el) =>
  el.addEventListener("click", function (e) {
    e.target.closest(".mobile-menu")?.classList.remove("active");
    console.log("working");
    document.querySelector(".sidebar").classList.remove("mobile-mode");
    document.querySelector(".mobile-overlay").classList.remove("active");
  })
);

//////////////////////
//////////////////////
// Mobile Mode Sidebar
document.querySelector("[data-sidebar-btn]").addEventListener("click", function (e) {
  document.querySelector(".sidebar").classList.toggle("mobile-mode");
  document.querySelector(".mobile-overlay").classList.toggle("active");
});
