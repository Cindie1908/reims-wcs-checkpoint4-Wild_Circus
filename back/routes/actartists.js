const express = require('express');
const router = express.Router();
const connection = require("../conf");


router.get('/', (request, response) => {
  connection.query(
    "SELECT * FROM actartist",
    (err, results) => {
      if (err) {
        response.status(500).send('Error retrieving actartist');
      } else {
        response.json(results);
      }
  });
})


module.exports = router