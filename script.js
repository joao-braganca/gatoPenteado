var pontos = 0;
var bloqueio = false;
var pontoApresentado = 0;
var teste = 0;
function mouse() {
    pontos++;
    if (bloqueio == false) {
        if (pontos % 400 == 0) {
            pontoApresentado++;
            document.getElementById("pontos").textContent = pontoApresentado;
        }
    }else{
        document.getElementById("perdeu").style.animation="perder 1s ease-in forwards";
        document.getElementById("perdeu").style.visibility="visible";

    }
}



// mouse
document.addEventListener("mousemove", (e) => {
    document.getElementById("mouse").style.top = e.clientY + "px";
    document.getElementById("mouse").style.left = e.clientX + "px";
});



// contador cabeça
rodar();
function rodar(){
    document.getElementById("gatocabeca").style.visibility="visible";
    setTimeout(()=>{
        bloqueio = !bloqueio;
        setTimeout(()=>{
            document.getElementById("gatocabeca").style.visibility="hidden";
            bloqueio = !bloqueio;
            setTimeout(rodar, random("aparecer"));
        }, random("desaparecer"));
    },500);
}


// numero aleatorio
function random(elemento){
    var elemento = elemento;
    var escolherTempo = {"desaparecer":{"min":1500,"max":3000},"aparecer":{"min":4000,"max":7000}};
    var tempo = Math.random() * (escolherTempo[elemento].max - escolherTempo[elemento].min + 1) + escolherTempo[elemento].min;
    console.log(tempo);
    return tempo;
}

