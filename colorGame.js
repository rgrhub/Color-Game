let square = document.querySelectorAll(".col");
let button = document.getElementsByTagName("button");
let h1 = document.querySelector("h1");
let difficulty = true;
let result = randomColor(square);
let guess = document.getElementById("guess");
// let chance = 3;
// let tries = document.getElementById("try");

reset(square);
h1.textContent = result;
// tries.textContent = "TRIES: ".concat(chance);

button[0].addEventListener("click",function(){
    reset(square);
    button[0].textContent = "NEW COLORS";
    if (difficulty) {
        // chance = 3;
        // tries.textContent = "TRIES: ".concat(chance);
    } else {
        // chance = 2;
        // tries.textContent = "TRIES: ".concat(chance);
    }
});

button[1].addEventListener("click",function(){
    difficulty = false;
    button[0].textContent = "NEW COLORS";
    button[1].classList.add("active");
    button[2].classList.remove("active");
/*     chance = 2;
    tries.textContent = "TRIES: ".concat(chance);
 */    reset(square);
});

button[2].addEventListener("click",function(){
    difficulty = true;
    button[0].textContent = "NEW COLORS";
    button[2].classList.add("active");
    button[1].classList.remove("active");
/*     chance = 3;
    tries.textContent = "TRIES: ".concat(chance);
 */    reset(square);
});

function reset(array) {
    if (difficulty) {
        for (let index = 0; index < array.length; index++) {
            array[index].style.backgroundColor = random_rgb();
            
            array[index].classList.remove("invisible");
    
            array[index].addEventListener("click",function(){
                this.classList.add("invisible");
/*                 chance = chance-1;
                tries.textContent = "TRIES: ".concat(chance);
 */                gameOver(this.style.backgroundColor);
            });
            // chance = 3;
        }    
        result = randomColor(array);
    }else{
        for (let index = 0; index < array.length; index++) {
            array[index].style.backgroundColor = random_rgb();
            
            array[index].classList.remove("invisible");
   
            array[index].addEventListener("click",function(){
                this.classList.add("invisible");
/*                 chance = chance-1;
                tries.textContent = "TRIES: ".concat(chance);
 */                gameOver(this.style.backgroundColor);
            });
            // chance = 2;
            
            if (index > 2) {
                array[index].classList.add("invisible");
            }
        }    
        result = randomColorEasy(array);
        // tries.textContent = "TRIES: ".concat(chance);
    }
    h1.textContent = result;
    guess.textContent = "";
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) + ')';
}

function randomColor(array) {
    let aux = Math.round(Math.random()*5);
    return array[aux].style.backgroundColor;
}

function randomColorEasy(array) {
    let aux = Math.round(Math.random()*2);
    return array[aux].style.backgroundColor;
}

function gameOver(color) {
    if (result === color /* || chance === 0 */) {
        document.getElementById("jumbobg").style.background = result;
        
        if (difficulty) {
            square[0].style.backgroundColor = result;
            square[1].style.backgroundColor = result;
            square[2].style.backgroundColor = result;
            square[3].style.backgroundColor = result;
            square[4].style.backgroundColor = result;
            square[5].style.backgroundColor = result;
            
            square[0].classList.remove("invisible");
            square[1].classList.remove("invisible");
            square[2].classList.remove("invisible");
            square[3].classList.remove("invisible");
            square[4].classList.remove("invisible");
            square[5].classList.remove("invisible"); 
        } else {
            square[0].style.backgroundColor = result;
            square[1].style.backgroundColor = result;
            square[2].style.backgroundColor = result;
            
            square[0].classList.remove("invisible");
            square[1].classList.remove("invisible");
            square[2].classList.remove("invisible");
        }
        if (result === color) {
            guess.textContent = "Correct !!!";            
        }else{
            guess.textContent = "Game Over";                       
        }

        button[0].textContent = "PLAY AGAIN ?";

    }else{
        guess.textContent = "Try Again";
        }
    }
