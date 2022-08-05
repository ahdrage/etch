

(function () {
    
    const input = prompt("How mant rows and columns do you want?"); 
    document.querySelector('.container').style
    .setProperty('grid-template-columns', `repeat(${input}, 1fr)`);
  
    var fragment = document.createDocumentFragment();
    
    var gridContainer = document.querySelector('.container');

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


for (var i = 0; i < allCellsArray.length; i++) {
    allCellsArray[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "green";
}); 
}


/* test.addEventListener("mouseover", function() {
    document.getElementById("test").style.backgroundColor = "green";
});

newTest.addEventListener("mouseover", function() {
    this.style.backgroundColor = "blue";
}); */


/* 
let newEvent = document.getElementsByClassName("allDivs");


newEvent.addEventListener("mouseover", func, false);


function func() {   
   item.setAttribute("style", "background-color:blue;")
}

function func1()
{  
   item.setAttribute("style", "background-color:green;")
} */


/* newEvent.addEventListener("mouseover", function( event )) {
    event.target.style
}
 */

/* newEvent.addEventListener('mouseover', 
  e => e.target.classList.add('my-colour-class')
)
 */
/* let div = document.createElement("div");
 

div.setAttribute("class", "div")
div.innerHTML="Hi there"; 


document.getElementById('mother').appendChild(div);


let div2 = document.createElement("div");
 

div2.setAttribute("class", "div")
div2.innerHTML="Hi there"; 


document.getElementById('mother').appendChild(div2); */