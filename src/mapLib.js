var lat = 31.260582199999995;
var longi = 72.3403143;
var mymap = L.map('mapid').setView([lat, longi], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/sajeel01/ckm3sct66cftk17p6uehfet7r/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FqZWVsMDEiLCJhIjoiY2ttM3M0Nno4NGlvaTJubnd0ZHAybmczYyJ9.Z03hr-B0kYNSJ48mIPIRew', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FqZWVsMDEiLCJhIjoiY2ttM3M0Nno4NGlvaTJubnd0ZHAybmczYyJ9.Z03hr-B0kYNSJ48mIPIRew'
}).addTo(mymap);

