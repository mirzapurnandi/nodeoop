const Customer = require('../models/customer');

class CustomerService {
    constructor(){
        this.result = new Customer();
        this.list = 'wewe';
    }

    async setList(){
        const data = await this.result.list((error, results) => {
            console.log(results);
            this.list = results;
        });
    }

    async list(){
        return await this.list;
    }

}

module.exports = CustomerService