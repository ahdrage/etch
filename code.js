
// This function sets number of grid columns based on input from user and then creates corresponding divs
(function () {
    
    const input = prompt("How mant rows and columns do you want?"); 
    document.querySelector('.container').style
    .setProperty('grid-template-columns', `repeat(${input}, 1fr)`); // Setting number of grid columns based on user input
  
    var fragment = document.createDocumentFragment();
    
    var gridContainer = document.querySelector('.container');

    // Creating all divs based on user input
    for(var i = 0; i < input; i++) { 
        for(var j = 0; j < input; j++) {
            div = document.createElement("div"); 
            div.className = "allCells"; 
            fragment.appendChild(div);
        }
    }

    gridContainer.appendChild(fragment); 

})();


let allCellsArray = document.querySelectorAll(".allCells"); 

// Changing background of divs when mouse over
for (var i = 0; i < allCellsArray.length; i++) {
    allCellsArray[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "green";
}); 
}

