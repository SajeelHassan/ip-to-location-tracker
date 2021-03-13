class MAPBOX {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.mapContainer = document.getElementById('mapid');
        this.accessToken = 'pk.eyJ1Ijoic2FqZWVsMDEiLCJhIjoiY2ttM3M0Nno4NGlvaTJubnd0ZHAybmczYyJ9.Z03hr-B0kYNSJ48mIPIRew';
        this.username = 'sajeel01';
        // basic style
        this.stylekey = 'ckm3sct66cftk17p6uehfet7r';
        // setallite street
        this.stylekey = 'ckm6dcvx8exaz17ljsce08rlw';
        // day nevigation
        this.stylekey = 'ckm6dfcyf148w18rw1h1zals9';
        //Night navigation
        this.stylekey = 'ckm6dil2eexgs17ljuacnnwy2';
        // basic ++ style
        this.stylekey = 'ckm6db3b6c7x917rzx9txvkte';

    }
    createMap() {
        this.deleteMap();
        var element = document.createElement('div');
        element.id = 'theMap';
        element.style.height = '100%';
        this.mapContainer.appendChild(element);
        var mymap = L.map('theMap').setView([this.lat, this.lng], 13);
        L.tileLayer(`https://api.mapbox.com/styles/v1/${this.username}/${this.stylekey}/tiles/256/{z}/{x}/{y}@2x?access_token=${this.accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: `${this.accessToken}`
        }).addTo(mymap);
        var myIcon = L.icon({
            iconUrl: './images/icon-location.svg',
            iconSize: [30, 37]
        });

        L.marker([this.lat, this.lng], { icon: myIcon }).addTo(mymap);
    }
    deleteMap() {
        if (this.mapContainer.childNodes[0]) {
            document.getElementById('theMap').remove();
        }
    }
    updateLL(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}