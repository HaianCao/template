let indexTitle = 0;
function changeTitle(){
    setInterval(() => {
        if(indexTitle % 2 == 0){
            document.title = "❤ HAMIC ❤";
        }
        else{
            document.title = "🚀 GO GO GO 🚀";
        }
        indexTitle++;
    }, 2000)
}
changeTitle(indexTitle);