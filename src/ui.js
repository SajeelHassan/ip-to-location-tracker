class UI {
    constructor() {
        this.btn = document.getElementById('btn');
        this.input = document.getElementById('ip-input');
        this.ip = document.getElementById('ip-address');
        this.location = document.getElementById('location');
        this.time = document.getElementById('timezone');
        this.isp = document.getElementById('isp');
        this.loader = document.getElementById('loading-results');
        this.map = document.getElementById('mapid');
        this.reqData = [];
        this.err = document.getElementById('error-div');

    }
    pasteInfo(data) {
        this.reqData = [data.ip, data.location.city, data.location.country, data.location.timezone, data.isp, this.input.value]
        this.removeInfo();
        this.ip.innerHTML = `${this.reqData[0]}`;
        this.location.innerHTML = `${this.reqData[1]},${this.reqData[2]}`;
        this.time.innerHTML = `UTC ${this.reqData[3]}`
        this.isp.innerHTML = `${this.reqData[4]}`;
    }
    loadingUI() {
        this.map.style.visibility = "hidden";
        this.loader.style.visibility = 'visible';
    }
    removeInfo() {
        this.ip.innerHTML = "";
        this.location.innerHTML = "";
        this.time.innerHTML = "";
        this.isp.innerHTML = "";
    }
    updateInfo() {
        this.ip.innerHTML = `${this.reqData[0]}`;
        this.location.innerHTML = `${this.reqData[1]},${this.reqData[2]}`;
        this.time.innerHTML = `UTC ${this.reqData[3]}`
        this.isp.innerHTML = `${this.reqData[4]}`;
    }
    showUI() {
        this.loader.style.visibility = 'hidden';
        this.map.style.visibility = "visible";
    }
    showError() {
        this.err.style.display = 'block';
        document.getElementById('errorText').innerText = 'Invalid IP Address';
        setTimeout(() => {
            this.err.style.display = 'none';
        }, 3000);
    }


}