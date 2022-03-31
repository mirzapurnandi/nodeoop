const cobaModel = require('../models/cobaModel');

class CobaService {
    constructor(){
        this.model = new cobaModel();
    }

    //coba tambah keterangan
    async ambilData(id = null) {
        try {
            let customerList = await this.model.find(id);
            return customerList;
        } catch (error) {
            console.log(error);
            return error;
        }
        
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
    }
}

module.exports = CobaService;