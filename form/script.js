const submit = document.getElementById('submit');
const elements = document.getElementById('form').elements;
const form = document.getElementById('form')
const fname = document.getElementById('fname');
const error = document.querySelector("input + span.error");
const requestsDiv = document.querySelector('.list'); //parent node of newList
const nameArr = []; //store names
const newList = document.createElement('li'); //create li element for displaying names
const input = document.querySelector('input');

const validateForm = (event) => {
    for(let i = 0; i < elements.length; i++) {
        if (elements[i].type === "radio") {
            if (elements[i].checked) {
                console.log(elements[i].value);
            }
        } else {
            if (elements[i].value === '') {
                error.textContent = 'Fill out this field';
                console.log('nope');
                event.preventDefault();
    
            } else {    
                console.log(elements[i].value);
                nameArr.push(`${elements[i].value}`); //append name to nameArr
                // localStorage.setItem("nameLists", nameArr); //store nameArr in a web browser
                // const nameLists = localStorage.getItem("nameLists"); //get nameArr
                // newList.innerText = nameLists; //updates the name on screen. Display all the names stored in the nameArr
                // requestsDiv.appendChild(newList); //append p element to parent node
                console.log(nameArr);
               
            }
        }
        
    }
    

}

form.addEventListener('submit', validateForm);


