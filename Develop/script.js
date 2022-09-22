// DECLARE Current time   
var currentTime = moment();

//  DECLARE Current hour (military time)
var currentHour = moment().hour();
// DECLARE Current Day HTML Element
// var currentDay = moment.().
// DECLARE Time Entries Container HTML Element
var timeEntries
// Render a block for each hour of the day
var data

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
};
setInterval(update, 1000);

let timeString = currentTime.format("MMMM Do YYYY, h:mm:ss a")

for(var i =9; i <=17; i++) {
    
    var key = "hour-"+i;
    // Attempt to get the saved data for the hour of the loop
    var data = localStorage.getItem(key)
//  Compare i to current hour to determine if this hour is in the past, present, or future
    var time = i > 12 ? `${i-12}PM`: `${i}AM`

    
    var templateOne = `
        <div class="row time-block ${i}">
            <div
            class="hour">
                ${time}
            </div>
            <div class="textArea">
                <textarea>${data ? data: ''}</textarea>
            </div>
            <div>
                <button class="saveBtn" data-hour="${i}">Save</button>
            </div>
        </div>
        `;
        
        $( "#timeEntries" ).append(templateOne)
};

$( "#currentDay").text(timeString)


$( ".saveBtn").on("click", function(event){
var textInput = event.target.closest('.row').querySelector('textarea')
var buttonHour = event.target.dataset.hour // this is the hour of the save button
var textData = textInput.value
console.log(buttonHour, textData)
var localStorageKey = "hour-" + buttonHour
console.log(localStorageKey)
console.log(textInput)
localStorage.setItem(localStorageKey, textData)
});



// Save an hour to local storage
// access text are of specific time block to grab inner HTML
// save inner HTML in local storage in a key that matches the hour number
// setItem("key", value)
// getItem("key")