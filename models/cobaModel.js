const connection = require('../db/connection');

class CobaModel {
    constructor(){
        this.table = 'customers';
        this.db = connection;
    }

    find = async (id) => {
        let sql = `SELECT * FROM ${this.table} `;
        if(id != null){
            sql += `where id = ${id}`;
        }
        return await this.db.query(sql);
    }
}

module.exports = CobaModel;