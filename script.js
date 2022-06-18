let quant = 0;
const allCards = [`bobrossparrot`, "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let cards = [] ;
let dobledCards = [] ;
let shuffledCards = [] ;  
let table = document.querySelector(".table");
let contador = 0
let jogadas = 0
function quantidade(){
    quant = Number(prompt("Com quantas cartas deseja jogar?"));
    let key = quant % 2;
    while (key === 1 || quant < 4 || quant > 14){
        quant = Number(prompt("O número de cartas deve ser par e ser entre 4 e 14. Com quantas cartas deseja jogar?"));
        key = quant % 2;
    }
}
quantidade();

function separate() {
    i = 0
    quant = quant/2
    while(i < quant){
        cards.push(allCards[i]);
        i++
    }
}
separate()

function doble() {
    dobledCards = cards.concat(cards);    
}
doble()

function randomazing() { 
	return Math.random() - 0.5;
} 
randomazing() 

function shuffle() {
    shuffledCards = dobledCards.sort(randomazing)  
}
shuffle()

function addCards(){
    let i = 0
    quant = quant*2
    while (i < quant){
        table.innerHTML = table.innerHTML + `<div class="card" onclick="select(this)"> 
        <div class="face back ">
            <div><img src="./images/back.png" alt=""></div>
        </div>
        <div class="face front"> 
            <div><img class="gif" src="./images/${shuffledCards[i]}.gif" alt=""></div>    
        </div>
        </div>`
        i++
    }
}
addCards()

function select(elemento) {
    jogadas ++
    let selecionou = document.querySelectorAll(".selected");
    if(selecionou.length <= 1){
        elemento.classList.add("selected");
    }
    wait();
}

function wait(){
    let selecionou = document.querySelectorAll(".selected");
    if(selecionou.length == 2){
        setTimeout(fix, 1500);
    }
}

function fix(){
    let selecionou = document.querySelectorAll(".selected");
    if(selecionou.length == 2){
        let item1 = selecionou[0].querySelector(".gif");
        let item2 = selecionou[1].querySelector(".gif");
        item1 = item1.currentSrc;
        item2 = item2.currentSrc;
        if( item1 === item2){
            selecionou[0].classList.remove("selected");
            selecionou[1].classList.remove("selected");
            selecionou[0].classList.add("fixed");
            selecionou[1].classList.add("fixed");
            contador = contador + 2;
            win();
        }else{
            selecionou[0].classList.remove("selected");
            selecionou[1].classList.remove("selected");
        }
    }
}

function win() {
    if(contador == quant){
        alert(`Você ganhou em ${jogadas} jogadas!`)
    }
}



