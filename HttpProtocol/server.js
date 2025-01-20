const express = require('express');
const path = require('path');

const app = express();

app.use(express.json()); // This allows sending data from client request in json format. Test this in postman by sending data as 'raw json'
app.use(express.urlencoded({ extended: false })); // This allows sending of form-data acquired from client request

app.post('/contact', (req, res) => {
    if (!req.body.name) {
        res.status(400).send('Name is required');
    }

    res.status(201).send(`Hello ${req.body.name}`);
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
