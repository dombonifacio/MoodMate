document.addEventListener("DOMContentLoaded", displayAnalysis)
function displayAnalysis(){

    
    const happyText = document.getElementById("happyText")
    const sadText = document.getElementById("sadText")
    const neutralText = document.getElementById("neutralText")
    const angryText = document.getElementById("angryText")
    const stressedText = document.getElementById("stressedText")
    const lovedText = document.getElementById("lovedText")

    if (localStorage.getItem("emoticonsTotal"))
    {
        let countEmoticons = JSON.parse(localStorage.getItem("emoticonsTotal"))

        
        happyText.innerText = `Happy: ${countEmoticons.Happy}`
        sadText.innerText = `Sad: ${countEmoticons.Sad}`
        neutralText.innerText = `Neutral: ${countEmoticons.Neutral}`
        angryText.innerText = `Angry: ${countEmoticons.Angry}`
        stressedText.innerText = `Stressed: ${countEmoticons.Stressed}`
        lovedText.innerText = `Loved: ${countEmoticons.Loved}`


        
        // collect the happy element paragraph number then replace it with the value of the countEmoticons

        

      
    }
}