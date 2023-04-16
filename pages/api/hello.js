import mysql from "mysql";
const db = mysql.createConnection({
  host: "enzomrg.com",
  database: "uqkn2942_enzmrg",
  user: "uqkn2942_enzmrg",
  password: "5()Amg9709",
});

export default function handler(req, res) {
  db.connect((err) => {
    if (err) return console.log(err);

    if (!err) {
      db.query("SELECT * FROM `heures`", (error, heures) => {
        error ? console.log(error) : null;
        db.query("SELECT * FROM `reserver`", (error, reservation) => {
          error ? console.log(error) : null;
          db.query(
            "SELECT `id`, `titre`, `description`, `lien` FROM `images`",
            (error, image) => {
              error ? console.log(error) : null;
              res.send({ heures, reservation, image });
            }
          );
        });
      });
    }
  });
}
