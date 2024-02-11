const mysql = require('mysql');


const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Qwerty",
	database: "joga_mysql"
});

module.exports = db;