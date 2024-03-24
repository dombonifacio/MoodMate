/************************ PRINT DATA *************************/
document.addEventListener("DOMContentLoaded", printEntries)
function printEntries(){  

    // Store the saved data in userEntries
    
    if (localStorage.getItem("entries")){
        let userEntries;

        // get the data. JSON.parse converts the string back to object
        userEntries = JSON.parse(localStorage.getItem("entries"))
        
        
        // get the main row for all of the notes
        let entriesContainer = document.querySelector(".entriesContainer")

        // go through the object's properties
        // dom manipulation
        userEntries.forEach(entry => {

            userEntries = JSON.parse(localStorage.getItem('entries'))

            // column for each note. to be added in the main row (entriesContainer)
            let col = document.createElement("div");
            col.classList.add("col-md-6", "col-lg-4")
            // appends the first note into the note container (main row)
           

            // row inside the main column note
            let row = document.createElement("div")
            row.classList.add("row", "noteContainer")
            col.appendChild(row)


            // ******* THE COLUMNS INSIDE THE NOTE CONTAINER SHOWING THE CONTENT *******

            // first column, shows the date
            let dateCol = document.createElement("div")
            dateCol.classList.add("col-12", "gy-0", "dateRow")
            let dateHeader = document.createElement('h5')
            dateHeader.classList.add("keyHeader", "pt-1")

            // add the date content into its own column (to show in the note container)
            dateHeader.innerText = `Date: ${entry.date}`
            dateCol.append(dateHeader)


             // **** second column, shows the Mood content ****
            let moodCol = document.createElement("div")
            moodCol.classList.add("col-12")
            let moodHeader = document.createElement("h1")
            moodHeader.classList.add("keyHeader", "pt-1", "keyChangeMargin")
            let moodParagraph = document.createElement("p")

            // add the mood values into its own column (to show in the note container)
            moodHeader.innerText = "Mood:";
            moodParagraph.textContent = "  " + entry.emoticon;
            moodCol.append(moodHeader, moodParagraph)


            // **** third column, shows the Reason content ****
            let reasonCol = document.createElement("div")
            reasonCol.classList.add("col-12")
            let reasonHeader = document.createElement("h1")
            reasonHeader.classList.add("keyHeader", "keyChangeMargin")
            let reasonParagraph = document.createElement("p")

            // add the reason values into its own column (to show in the note container)
            reasonHeader.innerText = "Reason:";
            reasonParagraph.textContent = "  " + entry.reasonEmotion.join(", ")
            reasonCol.append(reasonHeader, reasonParagraph)

            

             
            // **** fourth column, shows the durationEmotion content ****
            let durationEmotionCol = document.createElement("div")
            durationEmotionCol.classList.add("col-12")
            let durationEmotionHeader = document.createElement("h1")
            durationEmotionHeader.classList.add("keyHeader", "keyChangeMargin")
            let durationEmotionParagraph = document.createElement("p")

            // add the duration emotion values into its own column (to show in the note container)
            durationEmotionHeader.innerText = "Duration of emotion(s):"
            durationEmotionParagraph.textContent = "  " + entry.durationEmotion
            durationEmotionCol.append(durationEmotionHeader, durationEmotionParagraph)


                        

            // **** fifth column, shows the durationSleep content ****
            let durationSleepCol = document.createElement("div")
            durationSleepCol.classList.add("col-12")
            let durationSleepHeader = document.createElement("h1")
            durationSleepHeader.classList.add("keyHeader", "keyChangeMargin")
            let durationSleepParagraph = document.createElement("p")

            // add the duration sleep values into its own column (to show in the note container)
            durationSleepHeader.innerText = "Duration of sleep:"
            durationSleepParagraph.textContent = "  " + entry.durationSleep
            durationSleepCol.append(durationSleepHeader, durationSleepParagraph)


            // **** column break above the note section ****
            let breakCol = document.createElement("div")
            breakCol.classList.add("col-12", "hr", "my-1")

            

            // **** sixth column, shows the Note content ****
            let noteCol = document.createElement("div")
            noteCol.classList.add("col-12", "mb-3")
            let noteHeader = document.createElement("h1")
            noteHeader.classList.add("keyHeader", "my-0")
            let noteParagraph = document.createElement("p")

            // add the note header and paragraph content into its own column (to show in the note container)
            noteHeader.innerText = "Note:"
            
            // check if note is empty or not
            // if note is empty, add a custom text to remind user
          
            if (entry.note == ""){
                noteParagraph.innerText =  " You did not put in a note for this record."
            }
            else{

                noteParagraph.innerText =  "  " + entry.note
            }
            noteCol.append(noteHeader, noteParagraph)
        

            
            // append the nested column into the row inside the main colunn note
            row.append(dateCol, moodCol, reasonCol, durationEmotionCol, durationSleepCol, breakCol, noteCol)

            // append the maain column into the querySelected entries Container (main row)
            entriesContainer.appendChild(col)


            
        })
        
    }
    
    
       
        
}


