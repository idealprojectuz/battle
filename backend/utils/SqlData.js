const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "idealproject.uz",
  user: "footbolsfun_usr",
  password: "masanov3167",
  database: "footbolsfun",
});

class SqlData {
  async sqlData(SQL, ...params) {
    return new Promise((resolve, reject) => {
      connection.query(SQL, params, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

module.exports = new SqlData();
