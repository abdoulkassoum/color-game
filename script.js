//variables

let numPlaque = 6;
let couleurs = [];
let pickedColor;
let plaques = document.querySelectorAll(".plaque");
let colorDisplay = document.getElementById("vuecouleur");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let clickedColor;
let jeu= {}


// fonction  de couleurs aléatoire
function randomColor(){
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


// fontion generatrice de couleurs aléatoire
function generateRandomColors(num){
	let arr = [];
	for(let i = 0; i < num; i++)
		arr.push(randomColor());
	return arr;
}


//fonction pour regler le mode
	function setupModeButtons(){
		for(let i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
				modeButtons[0].classList.remove("selectionner");
				modeButtons[1].classList.remove("selectionner");
				this.classList.add("selectionner");
				this.textContent === "facile" ? numSquares = 3: numSquares = 6;
				reset();
			});
		}
	}

  // change couleur plaque
	function changeCouleurs(color){
	
		for(let i = 0; i < plaques.length; i++){
			
		 plaques[i].style.backgroundColor = color;
		}
	}

// fonction conditionner pour regler les plaques
	function setupPlaques(){
		for(let i = 0; i < plaques.length; i++){
		
		 plaques[i].addEventListener("click", function(){
				if(this.style.backgroundColor === pickedColor){
					messageDisplay.textContent = "Correct!";
					resetButton.textContent = "rejouez";
					changeCouleurs(pickedColor);
					h1.style.background = pickedColor;
				} else {
					this.style.backgroundColor = "#fff";
					messageDisplay.textContent = "reessayer";
				}
			});
		}
	}
//fonction reset
	function reset(){
		couleurs = generateRandomColors(numSquares);
		
		pickedColor = pick();
		
		colorDisplay.textContent = pickedColor;
		resetButton.textContent = " changez couleurs"
		messageDisplay.textContent = "";
		
		for(let i = 0; i < plaques.length; i++){
			if(couleurs[i]){
			 plaques[i].style.display = "block"
			 plaques[i].style.backgroundColor = couleurs[i];
			} else {
			 plaques[i].style.display = "none";
			}
		}
		h1.style.backgroundColor = "black";
	}
	
	// initialisation de l'objet jeu
	jeu.init = function(){
		setupModeButtons();
		setupPlaques();
		reset();
		}
	
		jeu.init();


	/*resetButton.addEventListener("click", function(){
		reset();
	})*/

	function pick(){
		let random = Math.floor(Math.random() * couleurs.length);
		return couleurs[random];
	}
	
