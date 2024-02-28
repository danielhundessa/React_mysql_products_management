const mysql = require("mysql2");

{/*
const conn = mysql.createConnection({
    user:process.env.USER,
    host:process.env.HOST,
    password:process.env.password,
    database:process.env.database
});
*/ }


// Creating a MySQL database connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "database",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

conn.connect((error)=>{
    if(error) throw error;
    console.log("connected !")
});

module.exports = conn