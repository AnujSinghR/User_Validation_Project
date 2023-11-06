const con = require('./mysql_con.js');

function create_table(table_name,col_1,col_2,col_3){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `CREATE TABLE '${table_name}' ('${col_1}' VARCHAR(255), '${col_2}' VARCHAR(255), '${col_3}' VARCHAR(255))`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });
}
  module.exports = create_table;