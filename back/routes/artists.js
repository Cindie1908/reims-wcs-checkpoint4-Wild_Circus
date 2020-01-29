const express = require('express');
const router = express.Router();
const connection = require("../conf");


router.get('/', (request, response) => {
  connection.query(
    "SELECT * FROM artist ORDER BY lastname ASC",
    (err, results) => {
      if (err) {
        response.status(500).send('Error retrieving artist');
      } else {
        response.json(results);
      }
  });
})


module.exports = router