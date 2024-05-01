const express = require('express');
const Datastore = require('nedb');
const app = express();
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' })); //limit to 1mb for data comes from body
   

  const database = new Datastore('database.db');
   database.loadDatabase();

app.post('/api', (req, res) => {
    console.log("I got a request");
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json({
        status: 'Success',
        timestamp: timestamp,
        latitude: data.lat,
        longitude: data.lon
    });

    

});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});