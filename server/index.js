const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const profileController = require('./controllers/profileController'); // Hier den korrekten Pfad verwenden

app.use('/profiles', profileController);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));