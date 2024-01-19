let hed = document.querySelectorAll("h4");
let per = document.querySelectorAll(".p");

for (let i = 0; i < hed.length; i++) {
  hed[i].addEventListener("click", () => {
    if (!per[i].classList.contains("p1")) {
      per[i].classList.add("p1");
    } else {
      per[i].classList.remove("p1");
    }
  });
}
