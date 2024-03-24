

let submitButton = document.querySelector(".submitBtn");
let userEntryForm = document.getElementById("userEntryForm")
let reasons = document.getElementsByName("reason")
const reasonBtn = document.querySelector(".reasonBtn")

const testDiv = document.querySelector(".test")

const result = document.getElementById("result")

function checkedEmoticon(src){
    result.textContent = `You selected: ${src.value}`
}


function checkedReason(){
    let reasons = document.getElementsByName("reason")
    let divColour;
    for (let i =0; i<reasons.length; i++){
        if (reasons[i].checked == true){

            divColour = reasons[i].parentElement
            divColour.setAttribute('style', 'background-color: #FF9FA0;')
            console.log(divColour)
            
        }
    }
    
    
}








// submitButton.addEventListener("click", addUserEntries);

// load the items from local storage everytime 

function addUserEntries(){
    
    // DOM Elements
    
    
    const inputContainer = document.getElementById("inputContainer")
    const submitForm = document.getElementById("submitForm")
    // Prevent form from acting like a default form
    userEntryForm.onsubmit = e => {
        e.preventDefault();
        //window.location.href="submitted.html"

        let text = document.createElement("p")
        text.innerText = "Entry submitted!"
        submitForm.appendChild(text)


        
        
        
        
    }
    

    
    // get the value of checked radio button (emoticon)
    const emoticons = document.getElementsByName("emoticon");
    
    
    getSelectedEmoticon(emoticons)
   
    // get selectedInput for the emotion input
    const durationEmotions = document.getElementById("durationEmotions")
    const durationSleep = document.getElementById("durationSleep")
    
    

    // declare an object to add for our userEntries
    let userInput = {
        emoticon: emoticons.value,
        reasonEmotion: limitReason(),
        durationEmotion: durationEmotions.options[durationEmotions.selectedIndex].text,
        durationSleep: durationSleep.options[durationSleep.selectedIndex].text,
        note: document.getElementById("note").value,
        date: document.getElementById("date").value
    }


    // activity analysis
    let countEmoticons  = {
        Happy: 0,
        Sad: 0,
        Neutral: 0,
        Stressed: 0,
        Angry: 0,
        Loved: 0
    };

    
    
    
    


    

    
    saveUserEntries(userInput);
    saveEmoticonsAmount(emoticons, countEmoticons)
    console.log("add item...")

    
}
function saveUserEntries(userInput){
    // if there is no local storage yet and visiting for the first time, make userEntries an empty array
    
    let userEntries;
    if (localStorage.getItem("entries") === null ){
        userEntries = [];
    } else{
        // else get the array from local storage
        userEntries = JSON.parse(localStorage.getItem("entries"))
    }

    

    userEntries.push(userInput)
    localStorage.setItem("entries", JSON.stringify(userEntries))
}

function saveEmoticonsAmount(emoticons, countEmoticons){


    // get the selected emoticon's vlaue
    // the value is a string
    let emoticonValue;
    for (let i =0; i< emoticons.length;i++){
        if(emoticons[i].checked == true){
            emoticonValue = emoticons[i].value;
        }
    }


    // check first if there is no data in the local storage, if not, setitem emoticonsTotal
    if (localStorage.getItem("emoticonsTotal") === null ){
        switch(emoticonValue){
            case "Happy": 
                countEmoticons.Happy++
                console.log("Visiting for the first time. You clicked: " + emoticonValue + " Total of happy: " + countEmoticons.Happy)
                break;
            case "Stressed":
                countEmoticons.Stressed++
                break;
            case "Angry":
                countEmoticons.Angry++
                break;
            case "Sad":
                countEmoticons.Sad++
                break;
            case "Neutral":
                countEmoticons.Neutral++
                break;
            case "Loved":
                countEmoticons.Loved++
                break;
            default:
                (alert("No emoticon selected"))
            

        }
        localStorage.setItem("emoticonsTotal", JSON.stringify(countEmoticons))

    
        

        

    }
    
    
    // if there is item matching "emoticonsTotal" 
    else if (localStorage.getItem("emoticonsTotal")){
        // before getItem, we set the item to a string, therefore, we must convert data back to its original state
        countEmoticons = JSON.parse(localStorage.getItem("emoticonsTotal"))
        
        
        switch(emoticonValue){
            case "Happy": 
                countEmoticons.Happy++
                console.log("Visiting for the second time. You clicked: " + emoticonValue + " Total of happy: " + countEmoticons.Happy)
                break;
            case "Stressed":
                countEmoticons.Stressed++
                break;
            case "Angry":
                countEmoticons.Angry++
                break;
            case "Sad":
                countEmoticons.Sad++
                break;
            case "Neutral":
                countEmoticons.Neutral++
                break;
            case "Loved":
                countEmoticons.Loved++
                break;
            default:
                (alert("No emoticon selected"))

        }
        // since we checked if there is emoticonsTotal, this will not overwrite the emoticonsTotal, but rather update the emoticonsTotal
        localStorage.setItem("emoticonsTotal", JSON.stringify(countEmoticons))
       
    }
   
    
    
    // 1. check what emoticon is checked
    // 2. find out what is the value of the checked emoticon
    // 3. if the value is happy, increment the emoticonsCount object's happy to 1
    // 4. repeat step number three for the remaining emoticons

}

// change button colour for emoticon once clicked




/************************ CHECKBOXES AND RADIO BUTTONS VALIDATION *************************/
// get selected input
function getSelectedEmoticon(emoticons)
{

    for (var i =0; i < emoticons.length; i++){
        if(emoticons[i].checked == true){
            // grab the value of the selected radio button from the form
            emoticons.value = emoticons[i].value;
            
        }
    }
}



function limitReason(){

    let reasons = document.getElementsByName("reason")

    let values = [];
    let totalReasons = 0;

    
    for (let i = 0; i < reasons.length; i++)
    {
        if(reasons[i].checked == true){
            
            

            values.push(reasons[i].value)
            
            totalReasons +=1;

           
          
        }
        
    }
    if (totalReasons > 3)
    {
        reasons.disabled = true;
        return false;
    }
    return values;
   


}

