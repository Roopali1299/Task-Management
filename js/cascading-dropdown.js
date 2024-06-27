var stateCityObject = {
    "Kerala": ["Kochi", "Kottayam", "Thodupuzha"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"]
}

window.onload = function() {
    var stateSel = document.getElementById("state");
    var citySel = document.getElementById("city");
    
    for (var state in stateCityObject) {
        stateSel.options[stateSel.options.length] = new Option(state, state);
    }

    stateSel.onchange = function() {
        // Empty the city dropdown
        citySel.length = 1;
        // Display correct cities
        var cities = stateCityObject[this.value];
        for (var i = 0; i < cities.length; i++) {
            citySel.options[citySel.options.length] = new Option(cities[i], cities[i]);
        }
    }
}