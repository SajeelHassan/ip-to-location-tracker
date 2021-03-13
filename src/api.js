class API {
    constructor() {
        this.key = "at_IlPSwRjGGETJEwUpoMUmRlU3pKctL";
        this.sendingInfo = "39.37.231.125";

    }
    async getData() {
        let apiUi = new UI();
        apiUi.loadingUI();
        const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${this.key}&ipAddress=${this.sendingInfo}`);
        var data = await response.json();
        return data;

    }
    updateInfo(info) {
        this.sendingInfo = info;
    }
}
