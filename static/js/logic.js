// Store our API endpoint as url.
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"


// Creating the map object
let myMap = L.map('map', {
    center : [37, -95],
    zoom : 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(myMap);


// Get the data with d3.
d3.json(url).then(function(data) {
    L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
            // Get the magnitude and depth of the earthquake
            let magnitude = feature.properties.mag;
            let depth = feature.geometry.coordinates[2];

            // Define the marker
            let markerOptions = {
                // Adjust the size of the marker based on magnitude
                radius: magnitude * 5, 
                // Set the color of the marker based on depth
                fillColor: chooseColor(depth), 
                color: "black",
                weight: 1,
                fillOpacity: 0.75
            };

            // Create the marker and bind a popup with additional information
            let marker = L.circleMarker(latlng, markerOptions);
            marker.bindPopup(`<h1>${feature.properties.place}</h1> <hr> <h3>Magnitude: ${magnitude}</h3> <h3>Depth: ${depth}</h3>`
            );

            return marker;
        }
    }).addTo(myMap);

     // Function to determine the color based on depth
function chooseColor(depth) {
    if (depth > 90) return "#EA2C2C";
    else if (depth > 70) return "#EA822C";
    else if (depth > 50 ) return "#EE9C00";
    else if (depth > 30) return "#EECC00";
    else if (depth > 10) return "#D4EE00";
    else return  "#98EE00";
};


    // Create a legend
let legend = L.control({ position: 'bottomright' });
    legend.onAdd = function() {
      let div = L.DomUtil.create('div', 'info legend');
      let depths = [-10, 10, 30, 50, 70, 90];
    //   let labels = [];
      let colors = [
        "#98EE00",
        "#D4EE00",
        "#EECC00",
        "#EE9C00",
        "#EA822C",
        "#EA2C2C"];

        //  Loop through the depth intervals and generate a label with a colored square for each interval
      for (let i = 0; i < depths.length; i++) {
        div.innerHTML += "<i style='background: "
        + colors[i]
        + "'></i> "
        + depths[i]
        + (depths[i + 1] ? "&ndash;" + depths[i + 1] + "<br>" : "+");
    }
    return div;
  };
  // Add legend to the map.
  legend.addTo(myMap);

});
  


