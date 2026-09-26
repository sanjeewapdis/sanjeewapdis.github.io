const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const profilePhoto = document.getElementById("profilePhoto");
const profileFallback = document.getElementById("profileFallback");
profilePhoto.addEventListener("load", () => {
  profileFallback.style.display = "none";
});
profilePhoto.addEventListener("error", () => {
  profilePhoto.style.display = "none";
  profileFallback.style.display = "grid";
});
