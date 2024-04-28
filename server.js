const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' })); //limit to 1mb for data comes from body

app.post('/api', (req, res) => {
    console.log("I got a request");
    console.log(req.body);
    const data = req.body;
    const db = [];
    res.json({
        status: 'Success',
        latitude: data.lat,
        longitude: data.lon
    });

    

});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});