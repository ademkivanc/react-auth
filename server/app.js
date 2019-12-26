const express = require('express');
const bodyParser = require('body-parser');
let authentication = require('./middleware/authentication');
let login = require ('./login');
let document = require ('./document')
let cors = require('cors')

const port = process.env.PORT || 8000;
let app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/login', login);
app.get('/document', authentication.check, document);
app.listen(port, () => console.log(`Server is listening on port: ${port}`));

