const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const submit_route= require('./Backend/routes/submit');
const app = express();
const mongoos_= require('mongoose');


mongoos_.connect("mongodb://localhost:27017/Qurilo_Solutions")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => { 
        console.error("Error connecting to MongoDB:", error);
    });

app.use(express.json());

app.post('/submit', submit_route);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
