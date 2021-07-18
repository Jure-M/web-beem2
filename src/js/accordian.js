const accordian = document.querySelector("#accordian-about");

const tabs = accordian.querySelectorAll(".c-accordian__item");
const tabBodies = accordian.querySelectorAll(".c-accordian__body");

accordian.addEventListener("click", function (e) {
  if (e.target.closest(".c-accordian__item")) {
    const id = e.target.closest(".c-accordian__item").getAttribute("data-id");

    tabBodies.forEach((body) => {
      console.log(body.getAttribute("data-id"));
      if (body.getAttribute("data-tab") == id) {
        body.classList.add("is-active");
      } else {
        body.classList.remove("is-active");
      }
    });
  }
});
