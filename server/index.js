const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

function errorHandler(err, req, res, next) {
  console.error('An error occurred:', err);
  return res.status(500).json({ error: 'An error occurred.' });
}

// Bindung der Profile-Routen
const profileRoutes = require('./routes/usersRoutes');
app.use('/users', profileRoutes);
app.use(errorHandler);

try {
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
} catch (error) {
  console.error('Error occurred during database synchronization:', error);

}
