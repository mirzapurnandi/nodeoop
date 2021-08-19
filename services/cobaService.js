const cobaModel = require('../models/cobaModel');

class CobaService {
    constructor(){
        this.model = new cobaModel();
    }

    async ambilData(id = null) {
        let customerList = await this.model.find(id);

        /* let o_data = [];
        customerList.forEach((val, i) => {
            o_data[i] = val;
            o_data[i]['detail'] = [
                {
                    "oke": 'mirza',
                    "adfsd": "asa",
                    "eee": 2
                }
            ]
        }); */

        return customerList;
    }
}

module.exports = CobaService;