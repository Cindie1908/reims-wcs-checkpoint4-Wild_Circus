const express = require('express');
const router = express.Router();
const connection = require("../conf");


router.get('/', (request, response) => {
  connection.query(
    "SELECT * FROM performance ORDER BY category ASC",
    (err, results) => {
      if (err) {
        response.status(500).send('Error retrieving performance');
      } else {
        response.json(results);
      }
  });
})


module.exports = router