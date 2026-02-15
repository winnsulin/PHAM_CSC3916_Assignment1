// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON body
app.use(express.json());

// Echo endpoint
app.post('/echo', (req, res) => {
    const receivedData = req.body;
    res.json(receivedData); // Respond with exactly what was sent
});

// Optional: simple GET endpoint for testing
app.get('/', (req, res) => {
    res.send('Echo server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
