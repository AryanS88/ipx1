const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle JSON parsing and URL encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom route that intentionally throws an error
app.get('/error', (req, res, next) => {
  try {
    // Simulate an error by dividing by zero
    const result = 10 / 0;
    res.json({ result });
  } catch (error) {
    // Pass the error to the next middleware
    next(error);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
