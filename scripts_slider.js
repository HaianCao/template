const a = ["aatrox1.jpg", "leesin1.jpg", "akali1.jpg", "xayah1.jpg", "rakan1.jpg"];
let index = 0;
function slider() {
    document.getElementById("home").innerHTML = `<img class=\"image\" src=\"./images/slider/${a[index]}\">`
}
let x = setInterval(() => {
    ++index;
    if(index == a.length){
        index = 0;
    }
    slider();
}, 4000);

function add() {
    clearInterval(x);
    ++index;
    if(index == a.length){
        index = 0;
    }
    slider();
}
function back() {
    clearInterval(x);
    --index;
    if(index == -1){
        index = a.length - 1;
    }
    slider();
}
