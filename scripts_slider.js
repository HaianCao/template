const a = ["aatrox1.jpg", "leesin1.jpg", "akali1.jpg", "rakan1.jpg", "xayah1.jpg"];
var index = 0;
function slider() {
  document.getElementById("home").innerHTML = `<img class=\"image\" src=\"./images/slider/${a[index % 4]}\">`
  index++;
}
setInterval(slider, 5000);

function add() {
  clearInterval();
  ++index;
  slider();
}
function back() {
  clearInterval();
  --index;
  slider();
}
