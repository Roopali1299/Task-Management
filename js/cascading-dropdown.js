var stateCityObject = {
    "Kerala": ["Kochi", "Kottayam", "Thodupuzha"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"]
}
// Creates an object 'stateCityObject' that holds the states as keys and arrays of cities as values.
window.onload = function() {  // Executes the code inside this function when the window (web page) is fully loaded.
    var stateSel = document.getElementById("state");
    var citySel = document.getElementById("city");
    // Retrieves the dropdown elements for state and city by their IDs and stores them in 'stateSel' and 'citySel' respectively.

    for (var state in stateCityObject) {
        stateSel.options[stateSel.options.length] = new Option(state, state);
    }
    // Loops through each state in 'stateCityObject' and adds it as an option to the state dropdown. The 'new Option' constructor creates a new option element with the state name as both the display text and value.
    stateSel.onchange = function() {
        // Empty the city dropdown
        citySel.length = 1;
        // Display correct cities
        var cities = stateCityObject[this.value]; // Retrieves the array of cities corresponding to the selected state from 'stateCityObject'.
        for (var i = 0; i < cities.length; i++) {
            citySel.options[citySel.options.length] = new Option(cities[i], cities[i]);
        }   // Loops through the cities array and adds each city as an option to the city dropdown.
    }
}
