var $ = function (elem) {
  return document.querySelector(elem);
};
var $$ = function (elem) {
  return document.querySelectorAll(elem);
};

$("html").classList.remove("no-js"); // Remove no-js class

/**
 * NAV ===================================================
 * Animate to section when nav is clicked
 */
$$('#menu a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    $(this.getAttribute("href")).scrollIntoView({behavior: 'smooth'});
    if ($("header").classList.contains("active")) {
      $$("header, body").forEach((e) => e.classList.remove("active"));
    }
  });
});

// Scroll to top
$("#to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to first element
$("#lead-down span").addEventListener("click", function () {
  window.scrollTo({
    top: $("#about").getBoundingClientRect().top,
    behavior: "smooth",
  });
});

// Open mobile menu
$("#mobile-menu-open").addEventListener("click", function (e) {
  $$("header, body").forEach((e) => e.classList.add("active"));
});

// Remove mobile menu
$("#mobile-menu-close").addEventListener("click", function (e) {
  $$("header, body").forEach((e) => e.classList.remove("active"));
});

/**
 * Copyright year ================================================
 */
$("#CR-year").innerHTML = new Date().getFullYear();

/**
 * Service Worker - Offline support ==========================================
 * This is the "Offline copy of pages" service worker
 */
if (navigator.serviceWorker.controller) {
  console.log("[PWA Builder] active service worker found, no need to register");
} else {
  //Register the ServiceWorker
  navigator.serviceWorker
    .register("sw.js", {
      scope: "./",
    })
    .then(function (reg) {
      console.log("Service worker has been registered for scope:" + reg.scope);
    });
}
