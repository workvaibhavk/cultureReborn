import mysql from "mysql2/promise"
    
export const db = mysql.createPool({
    host: 'localhost',
    user: 'host',
    password: 'culture@rdbms123',
    database: 'culture',
    waitForConnection: true,
    connectionLimit: 10
})
