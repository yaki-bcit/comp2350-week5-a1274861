const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "yjo6uubt3u5c16az.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "hg6xquebt4r8kt3f",
	password: "sc47n46n3y3udmm3",
	database: "cn574hwk3bs93evy",
	multipleStatements: false,
	reconnect: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		