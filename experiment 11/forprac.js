const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected");

    connection.query("create database wpnode1", (err, result)=> {
        if (err) throw err;
    
        const create = `
            CREATE TABLE student (
            Roll no INT PRIMARY KEY,
            name VARCHAR(20) not null
            )
        `;
        
    });
});