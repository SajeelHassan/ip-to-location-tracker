class API {
    constructor() {
        this.key = "at_IlPSwRjGGETJEwUpoMUmRlU3pKctL";
        this.ipAddress = "111.68.103.27";

    }
    async getData() {
        const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${this.key}&ipAddress=${this.ipAddress}`);
        const data = await response.json();

        return data;

    }
    updateIP(ip) {
        this.ipAddress = ip;
    }
}
