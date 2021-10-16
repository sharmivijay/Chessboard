const blackBox = document.querySelectorAll(".black");
const whiteBox = document.querySelectorAll(".white");


blackBox.forEach(function(currentBox){
    currentBox.addEventListener("click", handleBlackClick);
})

whiteBox.forEach(function(currentBox){
    currentBox.addEventListener("click",handleWhiteClick);
})

function handleBlackClick(selectedBox){
    console.log(selectedBox);
}

function handleWhiteClick(selectedBox){
    console.log(selectedBox);
}








// var table = document.createElement("table");
// for (var i = 1; i < 9; i++) {
//     var tr = document.createElement('tr');
//     for (var j = 1; j < 9; j++) {
//         var td = document.createElement('td');
//         if (i%2 == j%2) {
//             td.className = "black";
//         } else {
//             td.className = "white";
//         }
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// //newBox.innerHTML.appendChild(table) ;
// document.body.appendChild(table);