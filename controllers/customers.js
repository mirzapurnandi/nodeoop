const Customer = require('../models/customer');

class Customers {
    constructor(){
        this.result = new Customer();
        this.list   = this.list.bind(this);
    }

    async list(req, res, next){
        await this.result.list((error, results) => {
            res.send(results);
        });
    }

}

module.exports = Customers