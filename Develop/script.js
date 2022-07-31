// DECLARE Current time   
var currentTime = moment();
console.log(moment());
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
console.log(timeString)
console.log(currentHour)


for(var i =9; i <=12; i++) {

    var key = "hour-"+i;
    // Attempt to get the saved data for the hour of the loop
    var data = "";
//  Compare i to current hour to determine if this hour is in the past, present, or future

    var templateOne = `
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
        
        $( "#timeEntries" ).append(templateOne)
};
        for(var i =1; i <=5; i++) {

            var key = "hour-"+i;
            // Attempt to get the saved data for the hour of the loop
            var data = "";
    var templateTwo = `
        <div class="row" class="time-block">
            <div
            class="hour">
                ${i}PM
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
   
         $( "#timeEntries" ).append(templateTwo)
         
    };
console.log(templateOne)
console.log(templateTwo)
$( "#currentDay").text(timeString)


$( ".saveBtn").on("click", function(event){
var target = $(event.target)
return
})



// localStorage.setItem();
// Save an hour to local storage
// access text are of specific time block to grab inner HTML
// save inner HTML ini local storage in a key that matches the hour number