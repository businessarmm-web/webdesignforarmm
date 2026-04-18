(function(){
  var header = document.querySelector(".site-header");

  function syncHeader(){
    if (!header) return;
    header.classList.toggle("is-compact", window.scrollY > 24);
  }

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  document.querySelectorAll("[data-faq-question]").forEach(function(button){
    button.addEventListener("click", function(){
      var item = button.closest(".faq-item");
      if (!item) return;
      item.classList.toggle("is-open");
    });
  });
})();
