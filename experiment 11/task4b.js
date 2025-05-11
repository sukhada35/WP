//•	. Create a Node js file that Select all records from the "student" table, and display the result object on console
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
    const insertQuery = "INSERT INTO student (Student_name, Percentage) VALUES ('ABC Sharma', 85.6)";
    connection.query(insertQuery, (err, result) => {
        if (err) throw err;
        console.log("1 Record Inserted, ID: ", result.insertId);
    });
    const updateQuery = "UPDATE student SET Percentage = 90 WHERE Student_name = 'ABC Sharma'";
    connection.query(updateQuery, (err, result) => {
        if (err) throw err;
        console.log("Record Updated: ", result.affectedRows);
    });
    const deleteQuery = "DELETE FROM student WHERE Student_name = 'ABC Sharma'";
    connection.query(deleteQuery, (err, result) => {
        if (err) throw err;
        console.log("Record Deleted:", result.affectedRows);
    });
    const alterQuery = "ALTER TABLE student ADD COLUMN Age INT";
    connection.query(alterQuery, (err) => {
        if (err) throw err;
        console.log("Table Altered: 'Age' column added.");
        connection.end();
    });
});
