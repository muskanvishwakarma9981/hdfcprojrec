let mysql = require('mysql');

///db credential
let conn = mysql.createConnection({
    user: 'root',
    password : '',
    host: 'localhost',
    port: 3306,
    database: 'company'
})

//verify connection
conn.connect(function(err){
    if(err){
        console.log(err.sqlMessage)
    }else{
        console.log('connected.....')
    }
})

module.exports = conn