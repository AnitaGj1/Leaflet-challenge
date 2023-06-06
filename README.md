# Eartquake Vizualization

>## Description

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, we have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

>## Instructions

### 1. Get the dataset
* The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed page](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) and choose a dataset to visualize.
* When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. I choose dataset for the all earthquakes in the past day. The following image is a sampling of earthquake data in JSON format:

![alt_text](https://github.com/AnitaGj1/Leaflet-challenge/blob/main/Images/json.png)
### 2. Import and visualize the data
* Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude. The data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
* Create a legend that will provide context for the map data.
> ### [Link to the map](https://anitagj1.github.io/Leaflet-challenge/)
The following image is a screenshot of what I produced:

![alt text](https://github.com/AnitaGj1/Leaflet-challenge/blob/main/Images/USAMap.png)

>## Methodology

* d3.js
* Leaflet.js
* HTML
* CSS


>## Contents

* static(css/style.css; js/logic.js)
* index.html
* Images

![alt text](https://github.com/AnitaGj1/Leaflet-challenge/blob/main/Images/WorldMap.png)

>## Notes and resources
* Dataset to be used : [USGS GeoJSON Feed page](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
* NOTE-I have worked with Learning Assistant who guided me to put together the code for the legend in the logic.js and style.css files. 

