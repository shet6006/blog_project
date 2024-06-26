const mysql = require('mysql2'); //mysql 불러오기

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'blog',
    password: 'shet6006',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}); //mysql과 연결하기위한 기본 풀 구조

const promisePool = pool.promise(); //promise의 정의된 메서드

module.exports = promisePool;