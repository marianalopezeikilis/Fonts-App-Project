
var map = L.map('map').setView([37.344,-4.548], 8); // Andalucía

var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);

function popUpInfo(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.nomb_mus) {
        layer.bindPopup("<b>"+feature.properties.nomb_mus+"</b><br>"+feature.properties.municipio+" ("+feature.properties.provincia+")");
        //layer.bindPopup("<b>"+feature.properties.nomb_mus);
    }
}
L.geoJson(museos, {
    onEachFeature: popUpInfo
    }).addTo(map);
