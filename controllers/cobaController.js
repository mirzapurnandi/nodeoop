//const cobaModel = require('../models/cobaModel');
const CobaService = require('../services/cobaService');

class CobaController {
    constructor(){
        this.service = new CobaService();
        //this.model = new cobaModel();
    }

    /* getAllCustomers = async (req, res) => {
        let customerList = await this.model.find();

        let o_data = [];
        customerList.forEach((element, i) => {
            o_data[i] = element;
            o_data[i]['detail'] = [
                {
                    "oke": 'asdas',
                    "adfsd": "asa",
                    "eee": 2
                }
            ]
        });

        res.send(o_data);
    } */

    getAllCustomers = async (req, res) => {
        let customerList = await this.service.ambilData();
        res.send(customerList);
    }
}

module.exports = CobaController;