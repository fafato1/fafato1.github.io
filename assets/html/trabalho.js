var jogador = {
    pontuacao: 0,
    cliques: 0,
};

var luz = false, luz1 = false, luz2 = false, luz3 = false;
var luzesAcesas = 0;


function Acenderluz(){
    if(luz === false){
        document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulbon.gif'
        luz = true;
        luzesAcesas += 1;
        jogador.cliques += 1;
        jogador.pontuacao += 5;
    }

    document.getElementById("cliques").innerHTML = "Cliques: " + jogador.cliques;
    document.getElementById("luzes").innerHTML = "Luzes acesas: " + luzesAcesas;
    document.getElementById("pontos").innerHTML = "Pontos: " + jogador.pontuacao;

    (luz === true && luz1 === true && luz2 === true && luz3 === true) ? window.alert("Parabens você concluiu em " + jogador.cliques + " cliques"): "" ;
}


function Acenderluz1(){ //Apaga 4 e 1
    if(luz1 === false){
        document.getElementById("myImage1").src='https://www.w3schools.com/js/pic_bulbon.gif'
        document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulboff.gif'
        document.getElementById("myImage3").src='https://www.w3schools.com/js/pic_bulboff.gif'

        luz1 = true;
        luz3 = false;
        luz = false;
        jogador.cliques += 1;
        jogador.pontuacao += 5;
        (luzesAcesas % 2 == 0) ? jogador.pontuacao -= 6 : jogador.pontuacao -= 4;
    }

    document.getElementById("cliques").innerHTML = "Cliques: " + jogador.cliques;
    document.getElementById("luzes").innerHTML = "Luzes acesas: " + luzesAcesas;
    document.getElementById("pontos").innerHTML = "Pontos: " + jogador.pontuacao;
}

function Acenderluz2(){ //Apaga todos
    if(luz2 === false){
        document.getElementById("myImage2").src='https://www.w3schools.com/js/pic_bulbon.gif'
        document.getElementById("myImage3").src='https://www.w3schools.com/js/pic_bulboff.gif'
        document.getElementById("myImage1").src='https://www.w3schools.com/js/pic_bulboff.gif'
        document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulboff.gif'

        luz2 = true;
        luz = false;
        luz1 = false;
        luz3 = false;

        luzesAcesas += 1;
        jogador.cliques += 1;
        jogador.pontuacao += 5;
        (luzesAcesas % 2 == 0) ? jogador.pontuacao -= 9 : jogador.pontuacao -= 6;
    }
    document.getElementById("cliques").innerHTML = "Cliques: " + jogador.cliques;
    document.getElementById("luzes").innerHTML = "Luzes acesas: " + luzesAcesas;
    document.getElementById("pontos").innerHTML = "Pontos: " + jogador.pontuacao;
}

function Acenderluz3(){ //Apaga 1
    if(luz3 === false){
        document.getElementById("myImage3").src='https://www.w3schools.com/js/pic_bulbon.gif'
        document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulboff.gif'

        luz3 = true;
        luz = false;

        luzesAcesas += 1;
        jogador.cliques += 1;
        jogador.pontuacao += 5;  
        (luzesAcesas % 2 == 0) ? jogador.pontuacao -= 3 : jogador.pontuacao -= 2;
    }
    document.getElementById("cliques").innerHTML = "Cliques: " + jogador.cliques;
    document.getElementById("luzes").innerHTML = "Luzes acesas: " + luzesAcesas;
    document.getElementById("pontos").innerHTML = "Pontos: " + jogador.pontuacao;
    
}




function Apagarluz(){
    if(luz === true){
        document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulboff.gif'
        document.getElementById("myImage1").src='https://www.w3schools.com/js/pic_bulbon.gif'

        luz = false;
        luz1 = true;

        console.log("luz = false, luz1 = true");

        jogador.cliques += 1;
    }
    document.getElementById("cliques").innerHTML = "Cliques: " + jogador.cliques;
    document.getElementById("luzes").innerHTML = "Luzes acesas: " + luzesAcesas;
    document.getElementById("pontos").innerHTML = "Pontos: " + jogador.pontuacao;

}




function Apagarluz1(){
    if(luz1 === true){
        document.getElementById("myImage1").src='https://www.w3schools.com/js/pic_bulboff.gif'
        document.getElementById("myImage2").src='https://www.w3schools.com/js/pic_bulbon.gif'
        document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulbon.gif'

        luz1 = false;
        luz = true;
        luz2 = true;
        console.log("luz1 = false, luz = true, luz2 = true");

        jogador.cliques += 1;
    }
    document.getElementById("cliques").innerHTML = "Cliques: " + jogador.cliques;
    document.getElementById("luzes").innerHTML = "Luzes acesas: " + luzesAcesas;
    document.getElementById("pontos").innerHTML = "Pontos: " + jogador.pontuacao;

}

function Apagarluz2(){
    if(luz2 === true){
        document.getElementById("myImage2").src='https://www.w3schools.com/js/pic_bulboff.gif'
        document.getElementById("myImage3").src='https://www.w3schools.com/js/pic_bulbon.gif'
        document.getElementById("myImage1").src='https://www.w3schools.com/js/pic_bulbon.gif'

        luz2 = false;
        luz1 = true;
        luz3 = true;
        console.log("luz2 = false, luz1 = true, luz3 = true");

        jogador.cliques += 1;
    }

    document.getElementById("cliques").innerHTML = "Cliques: " + jogador.cliques;
    document.getElementById("luzes").innerHTML = "Luzes acesas: " + luzesAcesas;
    document.getElementById("pontos").innerHTML = "Pontos: " + jogador.pontuacao;

}

function Apagarluz3(){
    if(luz3 === true){
        document.getElementById("myImage3").src='https://www.w3schools.com/js/pic_bulboff.gif'
        document.getElementById("myImage2").src='https://www.w3schools.com/js/pic_bulbon.gif'

        luz3 = false;
        luz2 = true;
        console.log("luz3 = false, luz2 = true");

        jogador.cliques += 1;
    }

    document.getElementById("cliques").innerHTML = "Cliques: " + jogador.cliques;
    document.getElementById("luzes").innerHTML = "Luzes acesas: " + luzesAcesas;
    document.getElementById("pontos").innerHTML = "Pontos: " + jogador.pontuacao;

}