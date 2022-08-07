// Gets number of squares from user input and then creates columns and corresponding divs
function returnText() {
    let input = document.getElementById("userInput").value; 
    let squareRootInput = Math.sqrt(input); 
    

    
    document.querySelector('.container').style
    .setProperty('grid-template-columns', `repeat(${squareRootInput}, 1fr)`); // Setting number of grid columns based on user input
      
        let fragment = document.createDocumentFragment();
        
        let gridContainer = document.querySelector('.container');
    
        // Creating all divs based on user input
        for(let i = 0; i < squareRootInput; i++) { 
            for(let j = 0; j < squareRootInput; j++) {
                div = document.createElement("div"); 
                div.className = "allCells"; 
                fragment.appendChild(div);
            }
        }
    
        gridContainer.appendChild(fragment); 
    
    
    
    
    let allCellsArray = document.querySelectorAll(".allCells"); 
    
    // Changing background color of divs randomly when mouse over
    for (let i = 0; i < allCellsArray.length; i++) {
        let randomColorGenerator = Math.floor(Math.random()*16777215).toString(16);   
        let randomColor = "#" + randomColorGenerator; 
        allCellsArray[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = randomColor;
    }); 
    }
     
}

function reset() {
    let resetGame = document.querySelector(".container"); 
    resetGame.remove(); 

    let resetInput = document.querySelector("#userInput"); 
    resetInput.value = ""; 

    }






