const express = require("express");
const app = express();

const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.options('*', cors());
app.use(express.json());

//write query with pagination
app.get('/apartments', async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const itemsPerPage = parseInt(req.query.itemsPerPage);
    const offset = itemsPerPage * (page - 1);
    const apartments = await pool.query('SELECT * FROM apartments LIMIT $1 OFFSET $2', [itemsPerPage, offset]);
    const totalItems = await pool.query('SELECT COUNT(*) FROM apartments');
    const totalPages = Math.ceil(totalItems.rows[0].count / itemsPerPage);
    res.json({apartments: apartments.rows, totalPages});
  } catch (err) {
    console.error(err.message);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
