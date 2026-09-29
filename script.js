
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if(menuBtn && nav){
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const forms = document.querySelectorAll(".demo-form");
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! Your request has been received. This demo form is ready to be connected to your email/form service.");
      form.reset();
    });
  });
});
