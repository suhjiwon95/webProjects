const submit = document.getElementById('submit');
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const requestsDiv = document.querySelector('.list'); //parent node of newList
const nameArr = []; //store names
const newList = document.createElement('li'); //create li element for displaying names

const logSubmit = (e) => {
    alert(`${fname.value}'s form was submitted`);
    e.preventDefault();
    // window.open("./confirmation.html");

    nameArr.push(`${fname.value}`); //append name to nameArr
    localStorage.setItem("nameLists", nameArr); //store nameArr in a web browser
    const nameLists = localStorage.getItem("nameLists"); //get nameArr

    newList.innerText = nameLists; //updates the name on screen. Display all the names stored in the nameArr
    requestsDiv.appendChild(newList); //append p element to parent node
    console.log(nameArr);


}

form.addEventListener("submit", logSubmit);