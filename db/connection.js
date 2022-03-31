const mysql = require('mysql');

class DBConnection {
    constructor(){
        this.db = mysql.createPool({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'female_daily'
        });

        this.checkConnection();
    }

    checkConnection(){
        this.db.getConnection((err, connection) => {
            if(err){
                if(err.code === 'PROTOCOL_CONNECTION_LOST'){
                    console.log('Database connection was closed.');
                }
                if(err.code === 'ER_CON_COUNT_ERROR') {
                    console.log('Database has too many connections.');
                }
                if(err.code === 'ECONNREFUSED') {
                    console.log('Database connection was refused.');  
                }
            }
            if(connection) {
                connection.release();
            }
            return
        });
    }

    query = async (sql) => {
        return new Promise((resolve, reject) => {
            const callback = (error, result) => {
                if(error){
                    reject(error);
                    return
                }
                resolve(result);
            }
            this.db.query(sql, callback);
        }).catch(err => {
            throw err;
        });
    }
}

module.exports = new DBConnection();