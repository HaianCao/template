var index = 0;
function changeTitle(){
    setInterval(() => {
        if(index % 2 == 0){
            document.title = "❤ HAMIC ❤";
        }
        else{
            document.title = "🚀 GO GO GO 🚀";
        }
        index++;
    }, 2000)
}
changeTitle(index);