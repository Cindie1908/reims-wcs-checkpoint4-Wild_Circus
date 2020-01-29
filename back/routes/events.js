const express = require('express');
const router = express.Router();
const connection = require("../conf");


router.get('/', (request, response) => {
  connection.query(
    "SELECT title, showdate, showtime, showdescription, place FROM event ORDER BY showdate ASC",
    (err, results) => {
      if (err) {
        response.status(500).send('Error retrieving event');
      } else {
        response.json(results);
      }
  });
})


module.exports = router