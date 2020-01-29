const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));
const port = 8000;



const events = require('./routes/events');
const performances = require('./routes/performances');
const artists = require('./routes/artists.js');
const customers = require('./routes/customers');
//const bookings = require('./routes/bookings');
const acts = require('./routes/acts');
const actartists=require('./routes/actartists');
app.use('/api/events', events);
app.use('/api/performances', performances);
app.use('/api/artists', artists);
app.use('/api/customers', customers);
//app.use('/api/bookings', bookings);
app.use('/api/acts', acts);
app.use('/api/actartists', actartists);


app.listen(port, (err) => {
    if (err) {
      throw new Error('Something bad happened...');
    }
  
    console.log(`Server is listening on ${port}`);
  });