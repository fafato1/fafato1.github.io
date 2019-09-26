var jogador = {
    pontuacao: 0,
    cliques: 0,
};


function Acenderluz(){
    document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulbon.gif'

    jogador.cliques = jogador.cliques + 1;
    document.getElementById("cliques").innerHTML = jogador.cliques;
}


function Acenderluz1(){
    document.getElementById("myImage1").src='https://www.w3schools.com/js/pic_bulbon.gif'
    document.getElementById("myImage2").src='https://www.w3schools.com/js/pic_bulboff.gif'
    document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulboff.gif'

    jogador.cliques = jogador.cliques + 1;
    document.getElementById("cliques").innerHTML = jogador.cliques;
}

function Acenderluz2(){ //Apaga todos
    document.getElementById("myImage2").src='https://www.w3schools.com/js/pic_bulbon.gif'
    document.getElementById("myImage3").src='https://www.w3schools.com/js/pic_bulboff.gif'
    document.getElementById("myImage1").src='https://www.w3schools.com/js/pic_bulboff.gif'
    document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulboff.gif'

    jogador.cliques = jogador.cliques + 1;
    document.getElementById("cliques").innerHTML = jogador.cliques;
}

function Acenderluz3(){
    document.getElementById("myImage3").src='https://www.w3schools.com/js/pic_bulbon.gif'

    jogador.cliques = jogador.cliques + 1;
    document.getElementById("cliques").innerHTML = jogador.cliques;
    
}




function Apagarluz(){
    document.getElementById("myImage").src='https://www.w3schools.com/js/pic_bulboff.gif'

    jogador.cliques = jogador.cliques + 1;
    document.getElementById("cliques").innerHTML = jogador.cliques;

}

function Apagarluz1(){
    document.getElementById("myImage1").src='https://www.w3schools.com/js/pic_bulboff.gif'

    jogador.cliques = jogador.cliques + 1;
    document.getElementById("cliques").innerHTML = jogador.cliques;

}

function Apagarluz2(){
    document.getElementById("myImage2").src='https://www.w3schools.com/js/pic_bulboff.gif'

    jogador.cliques = jogador.cliques + 1;
    document.getElementById("cliques").innerHTML = jogador.cliques;

}

function Apagarluz3(){
    document.getElementById("myImage3").src='https://www.w3schools.com/js/pic_bulboff.gif'

    jogador.cliques = jogador.cliques + 1;
    document.getElementById("cliques").innerHTML = jogador.cliques;

}