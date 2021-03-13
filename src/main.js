var btn = document.getElementById('btn');
var input = document.getElementById("ip-input");
var theAPI = new API();
var theUI = new UI();
theAPI.getData().then(data => {
    theUI.showUI();
    theUI.pasteInfo(data);
    let theMap = new MAPBOX(data.location.lat, data.location.lng);
    theMap.createMap();
}).catch(err => {
    theUI.showUI();
    theUI.input.value = `main - Invalid IP`;
});

btn.addEventListener('click', () => {

    if (theUI.input.value != "") {
        theAPI.updateInfo(theUI.input.value);
        theAPI.getData().then((data) => {
            theUI.pasteInfo(data);
            theUI.showUI();
            let theMap = new MAPBOX(data.location.lat, data.location.lng);
            theMap.createMap();
        }).catch(() => {
            theUI.showUI();
            theUI.showError();
            theUI.updateInfo();

        });
    }
});
input.addEventListener('keyup', (event) => {

    if (theUI.input.value != "" && event.key == 'Enter') {
        theAPI.updateInfo(theUI.input.value);
        theAPI.getData().then((data) => {
            theUI.showUI();
            theUI.pasteInfo(data);
            let theMap = new MAPBOX(data.location.lat, data.location.lng);
            theMap.createMap();
        }).catch(err => {
            theUI.showUI();
            theUI.showError();
            theUI.updateInfo();
        });
    }
});
