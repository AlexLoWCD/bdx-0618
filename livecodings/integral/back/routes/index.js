import express from 'express';
import mysql from 'mysql';

const router = express.Router();

const connection = mysql.createConnection({
  multipleStatements: true,
  host: 'localhost',
  user: 'root',
  password: 'jecode4wcs',
  database: 'integral',
});

connection.connect((err) => {
  if (!err) {
    console.log('Database is connected');
  } else {
    console.log('No connection with database');
  }
});

router.get('/api/games', (req, res) => {
  const sqlQuery = 'SELECT g.id, g.name, g.release_date, p.name as platform_name FROM games g, platform p where g.id_platform = p.id';
  connection.query(sqlQuery, (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(results);
    }
  });
});

router.get('/api/platforms', (req, res) => {
  connection.query('SELECT * from platform', (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(results);
    }
  });
});

router.get('/api/games/:id', (req, res) => {
  connection.query('SELECT * from games where id = ?', [req.params.id], (error, results) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.json(results[0]);
    }
  });
});

router.post('/api/games', (req, res) => {
  connection.query('INSERT INTO games SET ?', req.body, (error) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.sendStatus(200);
    }
  });
});

export default router;
