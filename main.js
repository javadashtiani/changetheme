let changeThemeBtn = document.querySelectorAll(".btn");
changeThemeBtn.forEach((val) => {
  val.addEventListener("click", (e) => {
    let getDataColorValue = e.target.dataset.color;
    document.documentElement.style.setProperty(
      "--main-color",
      getDataColorValue
    );
  });
});