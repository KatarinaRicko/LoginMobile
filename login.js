const navTogglesCreateAcc = document.querySelectorAll(".close-btn-ca, .create-account-btn");
const createAccountMenu = document.querySelector(".create-acc-menu");

navTogglesCreateAcc.forEach((navToggle) => {
  navToggle.addEventListener("click", () => {
    createAccountMenu.classList.toggle("show-menu");
  });
});

console.log(navTogglesCreateAcc, createAccountMenu);

const navTogglesSignIn = document.querySelectorAll(".close-btn-si, .sign-in-btn");
const signInMenu = document.querySelector(".sign-in-menu");

navTogglesSignIn .forEach((navToggle) => {
  navToggle.addEventListener("click", () => {
    signInMenu.classList.toggle("sign-in-show");
  });
});

console.log(navTogglesSignIn, signInMenu);
