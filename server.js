const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');
const posts = require('./routes/api/items');

const keys =  require('./config/keys');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = keys.mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);
app.use('/api/posts', posts);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));