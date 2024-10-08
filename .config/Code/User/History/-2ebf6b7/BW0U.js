const express = require('express');
const fs = require('fs');
const path = require('path');

const db = require('./db/db.json');

const PORT = 3001; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//GET route for landing page
app.get('/', (req, res) => 
 res.sendFile(path.join(__dirname, '/public/index.html')));
//GET request for notes
app.get('/api/notes', (req, res) => res.json(``)
); 

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);