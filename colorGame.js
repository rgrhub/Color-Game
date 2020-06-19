let square = document.querySelectorAll(".col");
let button = document.getElementsByTagName("button");
let h1 = document.querySelector("h1");
let difficulty = true;
let result = randomColor(square);
let guess = document.getElementById("guess");
/* let chance = 3;
let tries = document.querySelector("span");
 */
reset(square);

button[0].addEventListener("click",function(){
    reset(square);
});

button[1].addEventListener("click",function(){
    difficulty = false;
    button[1].classList.add("active");
    button[2].classList.remove("active");
    reset(square);
});

button[2].addEventListener("click",function(){
    difficulty = true;
    button[2].classList.add("active");
    button[1].classList.remove("active");
    reset(square);
});

function reset(array) {
        for (let index = 0; index < array.length; index++) {
            array[index].style.backgroundColor = random_rgb();
            array[index].classList.remove("invisible");
            // chance = 3;
            
            if (!difficulty && index > 2) {
                array[index].classList.add("invisible");
                // chance = 2;
            }
   
            array[index].addEventListener("click",function(){
                this.classList.add("invisible");
            //   --chance;
                // tries.textContent = chance;               
                gameOver(this.style.backgroundColor);
            });
        }    
    button[0].textContent = "NEW COLORS";
    result = randomColor(array);
    h1.textContent = result;
    guess.textContent = "";

            // tries.textContent = chance;

}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgb(' + o(r()*s) + ', ' + o(r()*s) + ', ' + o(r()*s) + ')';
}

function randomColor(array) {
    if (difficulty) {
        let aux = Math.round(Math.random()*5);
        return array[aux].style.backgroundColor;    
    } else {
        let aux = Math.round(Math.random()*2);
        return array[aux].style.backgroundColor;    
    }
}

function bgHard(array, result) {
    if (difficulty) {
        for (let index = 0; index < array.length; index++) {
            array[index].style.backgroundColor = result;
        }    
    } else {
        for (let index = 0; index < 3; index++) {
            array[index].style.backgroundColor = result;
        }    
    }
}

function removeInvisible(array) {
    let index;
    if (difficulty) {
        for (index = 0; index < array.length; index++) {
            array[index].classList.remove("invisible");
        }    
    } else {
        for (index = 0; index < 3; index++) {
            array[index].classList.remove("invisible");
        }
    }
}

function gameOver(color) {
    if (result === color /* || chance === 0 */) {
        document.getElementById("jumbobg").style.background = result;
        
        bgHard(square, result);
        removeInvisible(square);
        guess.textContent = "Correct!";            
        button[0].textContent = "PLAY AGAIN?";

        // guess.textContent = "Game Over";                       

    }else{
        guess.textContent = "Try Again";
        }
    }
