let numSquares = 9
let colors = []
let pickedColor
let squares = document.querySelectorAll(".square")
let colorDisplay = document.getElementById("colorDisplay")
let messageDisplay = document.querySelector("#message")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let resetBtn = document.querySelector("#reset")
let modeBtn = document.querySelectorAll(".mode")


init()

function init() {
    setUpModeBtns()
    setUpSquares()
    reset()
}

function setUpModeBtns() {
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function () {
            modeBtn[0].classList.remove("selected")
            modeBtn[1].classList.remove("selected")
            this.classList.add("selected")
            numSquares = (this.textContent === "Fácil") ? 3 : 9
            reset()
        })
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "¡Felictaciones adivinaste!"
                resetBtn.textContent = "Jugar de nuevo"
                changeColors(clickedColor)
                h1.style.background = clickedColor
                h2.style.background = clickedColor
            } else {
                this.style.background = "#232323"
                messageDisplay.textContent = "¡Intentalo nuevamente!"
            }
        })
    }
}

function reset() {
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i]
            squares[i].style.display = "block"
        } else {
            squares[i].style.display = "none"
        }
    }
    h1.style.background = "slategray"
    h2.style.background = "slategray"
    messageDisplay.textContent = ""
    resetBtn.textContent = "Nuevos colores"
}

resetBtn.addEventListener("click", function () {
    reset()
})



function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr[i] = randomColor()
    }
    return arr
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"

}

//almacenando el div y el boton en unas variables
var div = document.getElementById('instructionsBtn');
var but = document.getElementById('boton');

//la funcion que oculta y muestra
function showHide(e){
e.preventDefault();
e.stopPropagation();
if(div.style.display == "none"){
div.style.display = "block";
} else if(div.style.display == "block"){
div.style.display = "none";
}
}
//al hacer click en el boton
but.addEventListener("click", showHide, false);

//funcion para cualquier clic en el documento
document.addEventListener("click", function(e){
console.log('clic');
//obtiendo informacion del DOM para  
var clic = e.target;
console.log(clic);
if(div.style.display == "block" && clic != div){
 div.style.display = "none";
}
}, false);