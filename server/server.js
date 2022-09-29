const express = require('express');
const app = express();
const mysql = require('mysql');


const db = mysql.createConnection({
  id: 'root',
  host: 'localhost',
  password: '',
  database: 'colorway'
})

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle request for static files
app.use(express.static(path.resolve(__dirname, '../client')));

app.post('/save', (req, res) => {
  const color1 = req.body.color1;
  const color2 = req.body.color2;
  const color3 = req.body.color3;
  const color4 = req.body.color4;
  const color5 = req.body.color5;
  const color6 = req.body.color6;

  db.query('INSERT INTO colorways (color1, color2, color3, color4, color5, color6) VALUES ($1, $2, $3, $4, $5, $6)', 
  [color1, color2, color3, color4, color5, color6], 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Colors saved")
    }
  })
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => 
  res.status(404).send('This is not the page you\'re looking for...')
);

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = app;