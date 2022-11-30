
const mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user"
});


con.connect(function (err) {
    if (err) {
        console.log("Not connect!!");
    } else {
        console.log("Connected to database successfully!");
    }
});

module.exports = con;