import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "bd_talento_pmce"
    //database: "banco_talentos2",
})