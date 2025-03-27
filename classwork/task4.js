var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "sukhada",
    password: "Sukh@12345t",
    database: "mydb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function(err, result){
        if(err) throw err;
        console.log("Table created");
    });
}