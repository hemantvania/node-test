const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongodb');

const app = express();
const port = 3000;

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

//app.use(userRoutes);
//app.use(todoRoutes)


//mongodb server connection
 mongoose.connect(`mongodb+srv://node-test:node-test@cluster0-fwoep.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true }, (err) => {
   if (err) console.log('Failed to connect to mongodb server', err);
   else console.log('successfully connected to mongodb server!');
 });



// mongodb+srv://node-test:<password>@cluster0-fwoep.mongodb.net/test?retryWrites=true&w=majority
app.use(express.static('public'));

const users = require('./users');

app.use('/users', users);

app.get('/', ( req, res)  => { 

  //  console.log(req);
    res.send(`Hello World! ${req.baseUrl}`) ;    
});

app.listen(port, () => console.log(`We are using port ${port}!`));

app.post('/', (req, res) => {
    res.send('Added');
});

app.put('/', (req, res) => {
    res.send('Edited');
});

app.delete('/', (req, res) => {
    res.send('Deleted');
});