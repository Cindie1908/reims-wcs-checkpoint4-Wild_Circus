const express = require('express');
const router = express.Router();
const connection = require("../conf");


router.get('/', (request, response) => {
  connection.query(
    "SELECT * FROM customer ORDER BY custom_lastname ASC",
    (err, results) => {
      if (err) {
          console.log(err)
        response.status(500).send('Error retrieving customer');
      } else {
        response.json(results);
      }
  });
})


module.exports = router