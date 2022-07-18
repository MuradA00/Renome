const setHeight = () => {
  document.getElementById("home-page").style.minHeight = window.innerHeight + "px"
};
let deviceWidth = window.matchMedia("(max-width: 4000px)");
if (deviceWidth.matches) {
  window.addEventListener("resize", setHeight);
  setHeight();
}
