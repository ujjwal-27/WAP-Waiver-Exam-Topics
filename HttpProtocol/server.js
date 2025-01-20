const express = require('express');
// const path = require('path');

const app = express();

app.use(express.json()); // this allows sending json data
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    let header = {
        'host': req.header('host'),
        'userAgent': req.header('user-agent'),
        'rawHeader': req.rawHeaders
    }

    res.send(header);
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
