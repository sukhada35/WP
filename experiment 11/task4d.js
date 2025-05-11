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

    const insertQuery = "INSERT INTO student (Student_name, Percentage) VALUES ?";
    const values = [
        ['Tanay Shah', 78.5],
        ['Neerav Reddy', 88.2],
        ['Ashmit Jain', 91.3],
        ['Sukhada Gulhane', 84.5]
    ];

    connection.query(insertQuery, [values], (err, result) => {
        if (err) throw err;
        console.log(`${result.affectedRows} Records Inserted.`);
        connection.end();
    });
});
