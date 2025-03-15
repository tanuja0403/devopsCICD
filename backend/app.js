const express = require('express');
const cors = require('cors'); // Add CORS to allow frontend requests
const app = express();

app.use(cors()); // Enable CORS

app.get('/names', (req, res) => {
    res.send("Tanuja");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
