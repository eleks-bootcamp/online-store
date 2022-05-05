const checkiphone = document.querySelector(".form-check-iphone");

const checklaptop = document.querySelector(".form-check-laptop");

const iphone = document.querySelectorAll(".iphone");

const laptop = document.querySelectorAll(".laptop");

checkiphone.addEventListener("change", (e) => {
  if (e.target.checked) {
    laptop.forEach((laptop) => {
      laptop.classList.add("hide");
    });
  } else {
    laptop.forEach((laptop) => {
      laptop.classList.remove("hide");
    });
  }
});

checklaptop.addEventListener("change", (e) => {
  if (e.target.checked) {
    iphone.forEach((laptop) => {
      laptop.classList.add("hide");
    });
  } else {
    iphone.forEach((laptop) => {
      laptop.classList.remove("hide");
    });
  }
});
