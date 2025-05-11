const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'a1234#1234T',
    database: 'wpnode1'
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected to wpnode1!");

    const selectQuery = "SELECT * FROM student";
    connection.query(selectQuery, (err, results) => {
        if (err) throw err;
        console.log("All Records:", results);
        connection.end();
    });
});
