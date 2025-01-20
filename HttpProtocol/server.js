const express = require('express');

const app = express();

app.use(express.json()); // This allows sending data from client request in json format. Test this in postman by sending data as 'raw json'
app.use(express.urlencoded({ extended: false })); // This allows sending of form-data acquired from client request

app.get('/', (req, res) => {
    res.send('<h2>Hello Express!</h2>');
});

// simulating contact form
app.post('/contact', (req, res) => {
    // checking name field
    if (!req.body.name) {
        res.status(400).send('Name is required');
    }

    // sending response
    res.status(201).send({
        'data': req.body,
        'message': `Hello ${req.body.name}`
    });
});

// simulating login form to validate auth token in header
app.post('/login', (req, res) => {
    if (!req.header('x-auth-token')) {
        res.status(400).send('No token');
    }

    if (req.header('x-auth-token') !== '1234567') {
        res.status(401).send('Not authorized');
    }

    res.send({
        'token': req.header('x-auth-token'),
        'message': 'Logged in'
    });
});

// Simulating a simple form for updating data
app.put('/post/:id', (req, res) => {
    res.send({
        'id': req.params.id,
        'title': req.body.title
    });
});

// Simulating a simple form for deleting data
app.delete('/post/:id', (req, res) => {
    res.send({
        'message': `Post ${req.params.id} deleted.`
    });
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
