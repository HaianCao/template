const a = ["aatrox1.jpg", "leesin1.jpg", "akali1.jpg", "xayah1.jpg", "rakan1.jpg"];
let index = 0;
function slider() {
    document.getElementById("home").innerHTML = `<img class=\"image\" src=\"./images/slider/${a[index]}\">`
}

let slide;
function runSlider(){
    slide = setInterval(() => {
        ++index;
        if(index == a.length){
            index = 0;
        }
        slider();
    }, 4000);
}

runSlider();

let check = 1;
function checkScroll(){
    if(check == 0){
        runSlider();
    }
    check = 1;
}

function add() {
    clearInterval(slide);
    ++index;
    if(index == a.length){
        index = 0;
    }
    slider();
    check = 0;
}
function back() {
    clearInterval(slide);
    --index;
    if(index == -1){
        index = a.length - 1;
    }
    slider();
    check = 0;
}
