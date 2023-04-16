import mysql from "mysql";

let connectDb = mysql.createConnection({
  host: "enzomrg.com",
  user: "uqkn2942_enzmrg",
  password: "5()Amg9709",
  database: "uqkn2942_enzmrg",
});

export default function handler(req, res) {
  connectDb.connect(function (err) {
    if (err) res.json({ error: err });
    res.status(200).json({ connected: "connected" });
  });
}
