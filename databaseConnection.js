const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "xjv8ue8dxqdpa1kf",
	password: "w456mzca5dz6f457",
	database: "qu8xrnirttrdgv69",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "X58F+,aa}&S/|kS?",
	database: "week_4_heroku",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		