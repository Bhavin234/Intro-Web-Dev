// script.js
function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");

        // Call showPopup here
        showPopup(true);

        // Create a new 'recommendation' element and set its value to the user's message
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
        // Add this element to the end of the list of recommendations
        document.getElementById("all_recommendations").appendChild(element);

        // Reset the value of the textarea
        recommendation.value = "";
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.display = 'block'; // Show the popup
    } else {
        document.getElementById('popup').style.display = 'none'; // Hide the popup
    }
}

function hidePopup() {
    showPopup(false); // Hide the popup
}
