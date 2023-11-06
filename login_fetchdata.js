const con_pool = require('./mysql_conPool.js');

function validate_user(user_name,pass_word){
    con_pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting database connection: ' + err.stack);
        return;
    }

    let sql = `SELECT * FROM userdata WHERE Username = ?`;
    connection.query(sql, [user_name], (err, result) => {
        connection.release(); // Release the connection back to the pool

        if (err) {
            console.error('Error executing database query: ' + err.stack);
            return;
        }
        console.log(result);
         if (result.length > 0 && result[0].Password === pass_word) {
             // Valid user
             console.log('Valid user');
             
         } else {
             // Invalid user
             console.log('Invalid user');
         }

         // con.end(); // Close the database connection after the query is executed
      });
  });}
  module.exports = validate_user;