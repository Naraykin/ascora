const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const AWS = require('aws-sdk'); 
const dotenv = require('dotenv');

const items = require('./routes/api/items');
const posts = require('./routes/api/posts');
const persons = require('./routes/api/persons');
const images = require('./routes/api/images');
const aws_files = require('./routes/api/aws_files');
const cors = require('cors');

const mongoURI =  require('./config/mongo-uri');

const app = express();

app.use(cors());
app.options('*', cors());

dotenv.config({ path: __dirname + '/.env'});

// BodyParser Middleware
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(express.urlencoded({ extended: true }));

AWS.config.update({ region: 'eu-central-1' });

// DB Config
const db = mongoURI(process.env.MONGO_NAME, process.env.MONGO_PASSWORD);

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);
app.use('/api/posts', posts);
app.use('/api/persons', persons);
app.use('/api/images', images);
app.use('/api/files', aws_files);

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