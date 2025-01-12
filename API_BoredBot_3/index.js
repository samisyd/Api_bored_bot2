/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://apis.scrimba.com/bored/api/activity

// "https://www.boredapi.com/api/activity"

// swapi.co or swapi.dev

2. Display the text of the activity in the browser
*/


/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)
*/

/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/


// similar / same
// fetch("https://apis.scrimba.com/bored/api/activity")
//   .then(function(response) {
//     return response.json()
//   })

// function getActivityIdea() {

document.getElementById("bored-btn").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => { 
            //console.log(data) 
            // document.getElementById("text-container").innerHTML = `<h1> "${data.activity}" </h1>`
            
            document.getElementById("happy-bot").textContent = "🦾 HappyBot🦿"
            document.getElementById("text-container").textContent = data.activity
            // document.body.classList.add("fun")
            document.querySelector("main").classList.add("fun")
        })
})


// document.getElementById("bored-button").addEventListener("click", getActivityIdea)



// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {method: "GET"})
//     .then(res => res.json())
//     .then(data => console.log(data))