let input = document.querySelector("input");
console.log(input);
let btn = document.querySelector("button");
console.log(btn);
let ul = document.querySelector("ul");
console.log(ul);

btn.addEventListener("click", () => {
  let item = document.createElement("li");
 

  item.innerText = input.value;


  
  console.log(item);
  // create dele button for each list and append in li
  let deletBtn = document.createElement("button");
  deletBtn.innerText = "delete";
  deletBtn.classList.add("delete");
  //append the item
  item.appendChild(deletBtn);
  ul.appendChild(item);
  input.value=""
});

let delBtns = document.querySelectorAll(".delete");
ul.addEventListener("click",function(event){
 if(event.target.nodeName == "BUTTON"){
  let listItem= event.target.parentElement;
  listItem.remove();
  console.log(event.target.parentElement)
  console.log(parentElement)
  //node name mens which item press and delete whether btn or li
 } 
})
//  for(delBtn of delBtns){
//      delBtn.addEventListener("click",function(){
//         console.log("to do wass delete");
//         let parent = this.parentElement;
//         parent.remove();
//     });
// }





















  // delBtns.forEach(btn=>{
  //   btn.addEventListener('click',()=>{
  //     console.log("click me")
  //   })
  // })



// if(item.value==""){
//     alert("please! fiil todo");
//      item.style.display="none"
// }
// else if(item.value){

// }
