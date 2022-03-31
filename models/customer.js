'use strict';
const connect = require('../db/db');

class Customer {
    constructor(){
        this.connect = connect;
    }

    list(callback){
        const query = `select * from customers`;
        /* const result = connect.query(query, (error, result) => {
            console.log(result);
            return result;
        }); */

        return this.connect.query(query, callback);
        //console.log(result);
        //return result;
        //return result;
        //let query = `select * from customers`;
        //return this.db.query(query, callback);
    }

    /* listGroup(callback){
        return this.db.query('select id, firstname, lastname, email from customers group by email', callback);
    }

    listItem(callback){
        return this.db.query('select item from customers group by item order by id,item asc', callback);
    } */
}

module.exports = Customer;