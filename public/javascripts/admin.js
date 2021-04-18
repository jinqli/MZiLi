onload = function () {
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let log_out = document.querySelector("#log_out");

  btn.onclick = function () {
    sidebar.classList.toggle("active");
  };
  log_out.onclick = function () {
    sidebar.classList.toggle("active");
  };
};
