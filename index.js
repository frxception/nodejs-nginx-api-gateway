const express = require("express");
const moment = require('moment');

const path = require ('path');

const members = require('./members')

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`);
    next();
}

// Init middleware

app.use(logger);

// Gets all Members
app.get('/api/members', (req, res) => res.json(members));

// set static folder
app.use(express.static(path.join ( __dirname, '/public')));

// app.get('/', (req, res) => (
//     res.send(" <h1> Hello World </h1> ")
// ));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
