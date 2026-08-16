//Form Array
let array = [];
const allArray = document.getElementById("all-array")
const pickedArray = document.getElementById("picked-array")
const inputPickedArray = document.getElementById("input-picked-array")
const inputBtn = document.getElementById("input-btn")
const saveArray = document.getElementById("save-array")
const LocalStorageArray = JSON.parse(localStorage.getItem("array"))
const delBtn = document.getElementById("del-btn")

if(LocalStorageArray){
  array = LocalStorageArray
  renderArray()
}

function renderArray(){
  let listArray = ""
  for (let i = 0; i < array.length; i++){
    listArray +=
    `
    <li>${array[i]}</li>
    `
  }
  allArray.innerHTML = listArray
}

delBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  array = [];
  renderArray()
})

inputBtn.addEventListener("click", function(){
  array.push(saveArray.value)
  saveArray.value = ""
  localStorage.setItem("array", JSON.stringify(array))
  renderArray()
})

inputPickedArray.addEventListener("input", function(){
    const inputParray = parseInt(inputPickedArray.value)
    const inputUser = inputParray - 1;
    const userGuide = `Anda memilih `;
    pickedArray.innerHTML = `${userGuide} ${array[inputUser]}`


    if (!isNaN(inputUser) && inputUser >= 0 && inputUser < array.length) {
    pickedArray.innerHTML = `${userGuide} ${array[inputUser]}`;
  } else if(inputUser >= array.length || inputUser < 1){
    pickedArray.innerHTML = `Tidak ada di list`
  } else {
    pickedArray.innerHTML = ``;
  }
})

