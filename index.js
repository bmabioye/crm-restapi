import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/crmRoutes';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

// mongoose connection

const dbconnect = async() => {
    await mongoose.connect('mongodb://localhost/CRMdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
};
dbconnect();

// bodyparser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// routes function
routes(app);

// serving static files

app.use(express.static('public/images'));

app.get('/', (req, res) => {
    res.send(`Node and Express running on ${PORT}`);
});


// listen function
app.listen(PORT, () => {
    console.log(`Your Server is running on port ${PORT}`)
});