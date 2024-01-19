let a = document.querySelector("#logo");
a.addEventListener("click", function fun() {
  document.getElementById("lol").click();
});

let nu = document.querySelectorAll(".moving");
window.onload(
  setTimeout(() => {
    for (let i = 0; i < nu.length; i++) {
      // nu[i].style.visibility = "visible";
      nu[i].classList.remove("moving");
    }
  }, 6500)
);
