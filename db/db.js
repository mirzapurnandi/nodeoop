var mysql = require('mysql');

var connect = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'female_daily'
})

connect.connect((error) => {
    if(error){
        console.log('error 123');
    } else {
        console.log('Connected');
    }
});

module.exports = connect;