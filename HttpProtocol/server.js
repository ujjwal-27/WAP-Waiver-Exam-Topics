const express = require('express');
const path = require('path');

const app = express();

app.use(express.json()); // This allows sending of body content from client request as response in json format
app.use(express.urlencoded({ extended: false })); // This allows sending of form data acquired from client request

app.post('/contact', (req, res) => {
    res.send(req.body);
});

const server = app.listen(5000, () => {
    console.log('Server started on 5000');
});

// Listen for shutdown signal and gracefully close the server
process.on('SIGINT', () => {
    console.log('Server shutting down...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
