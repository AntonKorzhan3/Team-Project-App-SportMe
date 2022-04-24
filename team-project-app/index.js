
const googleMarker = (position, map) =>
new google.maps.Marker({ position, map })

const googleMap = (zoom, center) =>
new google.maps.Map(document.getElementById("map"), {
  zoom,
  center,
})

function initMap() {
// The location of Uluru
this.uluru = { lat: 53.3498, lng: -6.2603 }
try {
  // The map, centered at Uluru
  const map = googleMap(4, this.uluru)
  // The marker, positioned at Uluru
  googleMarker(this.urulu, map)
} catch (error) {
}
}

    

window.initMap = initMap;

module.exports = {initMap}
    

    
    