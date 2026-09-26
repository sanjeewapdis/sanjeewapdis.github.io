const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".evidence-flip").forEach(tile => {
  tile.addEventListener("click", () => tile.classList.toggle("is-flipped"));
});

const profilePhoto = document.getElementById("profilePhoto");
const profileFallback = document.getElementById("profileFallback");
if (profilePhoto) {
  profilePhoto.addEventListener("load", () => {
    if (profileFallback) profileFallback.style.display = "none";
  });
  profilePhoto.addEventListener("error", () => {
    profilePhoto.style.display = "none";
    if (profileFallback) profileFallback.style.display = "grid";
  });
}
