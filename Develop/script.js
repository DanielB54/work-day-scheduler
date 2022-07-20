// DECLARE Current time   
var currentTime = moment();
console.log(moment());
//  DECLARE Current hour (military time)
var currentHour
// DECLARE Current Day HTML Element
var currentDay
// DECLARE Time Entries Container HTML Element
var timeEntries
// Render a block for each hour of the day
var data

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

let timeString = currentTime.format("dddd MMMM Do")
console.log(timeString)

for(var i =9; i <=17; i++) {

    var key = "hour-"+i;
    // Attempt to get the saved data for the hour of the loop
    var data = "";
//  Compare i to current hour to determine if this hour is in the past, present, or future

    var template = `
        <div class="row" class="time-block">
            <div
            class="hour">
                ${i}AM
            </div>
            <div class="textArea">
                <textarea>${data}</textarea>
            </div>
            <div>
                <button class="saveBtn" data-hour="${i}">Save</button>
            </div>
        </div>
    `;

    // Append the html to the page
$( "#timeEntries" ).append(template);

}

$( "#currentDay").text(timeString)


$( ".saveBtn").on("click", function(event){
var myRow = event.target
// myRow.closest("textarea")
console.log(myRow.closest("textarea"))
})



// localStorage.setItem();
// Save an hour to local storage