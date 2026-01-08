const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin', // MySQL password
  database: 'code_collaboration'
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    setTimeout(() => db.connect(), 2000); // Retry after 2 seconds
    return;
  }
  console.log('✅ MySQL Database connected');
});

module.exports = db;
