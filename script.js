var input=document.getElementById("input");
var ul=document.getElementById("unordered-list");

function update(){
    var listItem=document.createElement("li");
    listItem.innerHTML=`<h3>${input.value}</h3><button id='delete' class='delete' onclick='Delete(event)'>Delete</button>`;
    ul.append(listItem);


}


function Delete(event){
    event.target.parentElement.remove();
}