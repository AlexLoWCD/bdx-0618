import express from 'express';
import mysql from 'mysql';

const router = express.Router();

// BASE DE DONNEES LOCALE
// PENSEZ A CREER LA BASE DE DONNEES ET CHANGER LE MDP ROOT
const connection = mysql.createConnection({
  multipleStatements: true,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nodemysql',
});

connection.connect((err) => {
  if (!err) {
    console.log('Database is connected');
  } else {
    console.log('No connection with database');
  }
});

/* GET index page. */
router.get('/', (req, res) => {
  connection.query('SELECT * from ecoles', (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  const sqlReq = `SELECT * FROM ecoles WHERE id=${req.params.id}`;
  connection.query(sqlReq, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});

router.post('/', (req, res) => {
  connection.query('INSERT INTO ecoles SET ?', req.body, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("c'est bien rentré!!");
      res.sendStatus(200);
    }
  });
});

export default router;
