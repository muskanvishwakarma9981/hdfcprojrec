let conn = require ("./config")
let express = require('express')
let port = 9000
let app = express();

app.use(express.json())

app.get('/api/user', function(req, res){
    let sql = "SELECT * FROM employee"
    conn.query(sql, function(err, result){
     if(err)
      res.send(err)
     else
      res.send(result)
    })
   })