const con = require('./mysql_con.js');
function insertUserData(gmail, uname, pass) {
    con.connect(function (err) {
        if (err) throw err;

        console.log("Connected!");
        var sql = `INSERT INTO userdata (gmail, Username, Password) VALUES ('${gmail}', '${uname}', '${pass}')`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("user data inserted");
        });
    });
}
module.exports = insertUserData;
 