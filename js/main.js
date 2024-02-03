//Select elemnts
//forms
const multiplicationForm = document.querySelector("#multiplication-form")
//Tabuada do:
const numberInput = document.querySelector("#number")
//Multiplicar até:
const multiInput = document.querySelector("#multiplicator")

//title at thedcontainer-table
const multiTitle = document.querySelector("#multiplication-title span")

//table withe the class row
const multiplicationTable = document.querySelector("#multiplication-operation")
//Functions
const creatTable = (number, multiplicatorNumber)  => { //arroy function
   
   multiplicationTable.innerHTML =""

   for(i = 1 ; i <= multiplicatorNumber; i++){

    const result = number * i //this number will x with the i for the results
   
    const template = `<div class="row">
         <div class="operation">${number} x ${i} =</div>
        <div class="result">${result}</div>
    </div>`

    const parser = new DOMParser()  //allow to give the const template in the html

    const htmlTemplate = parser.parseFromString(template, "text/html") //parseFromString transfer or transform an string in html   (template, "text/html") the original data and the conversion
  
const row =  htmlTemplate.querySelector(".row")

multiplicationTable.appendChild(row) //elemnt child in the table nX 
} //dont begin zero, second  i to be bigger or eqauly to multipliocatornumber

multiTitle.innerText = number //at the final every multi, will to have the title with the number selected
} //the same results, but inside in the function 




//EVENTS
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value //Why +? causa will to do the value to stay whole

    const multiplicatorNumber = +multiInput.value

    if(!multiplicationNumber || !multiplicatorNumber) return //For the two values to stay to fill

   creatTable(multiplicationNumber, multiplicatorNumber) //like as an console
})


//<div class="row">
//<div class="operation">5x2 =</div>
//<div class="result">10</div>
//</div>

//<div class="row">
//<div class="operation">5x3 =</div>
//<div class="result">15</div>
//</div>