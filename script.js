const nhh = document.getElementById("nhh");

window.addEventListener("load", (event) => {
  nhh.style.display = "none";
});

document.getElementById("jobOffer").addEventListener("click", () => {
  nhh.style.display = "block";
});
document.getElementById("school").addEventListener("click", () => {
  nhh.style.display = "none";
});
document.getElementById("other").addEventListener("click", () => {
  nhh.style.display = "none";
});
