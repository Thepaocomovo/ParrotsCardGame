let quant = 0;
const allCards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let cards = [] ;
let dobledCards = [] ;
let shuffledCards = [] ;  
let table = document.querySelector(".table");

function select(elemento) {
    elemento.classList.toggle("selected");
}

function quantidade(){
    quant = Number(prompt("Com quantas cartas deseja jogar?"));
    let key = quant % 2;
    while (key === 1 || quant < 4 || quant > 14){
        quant = Number(prompt("O número de cartas deve ser par e ser entre 4 e 14. Com quantas cartas deseja jogar?"));
        key = quant % 2;
    }
    addCards();
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
    while (i < quant){
        nomes = shuffledCards[i];
        console.log(nomes)
        
        
        
        // table.innerHTML = table.innerHTML + 
        // `<div class="card" onclick="select(this)"> 
        // <div class="face back ">
        //     <div><img src="./images/back.png" alt=""></div>
        // </div>
        // <div class="face front"> 
        //     <div><img src="./images/${nomes}.gif" alt=""></div>    
        // </div>
        // </div>`
        i++
    }
}






