
const mongoose = require('mongoose');
// const express = require('express');


// const PORT = process.env.PORT || 3001;

// const app = express();
// dont forget the : between local and the 27017
mongoose.connect('mongodb://localhost:27017/socialDB')
    .then(async () => {
        console.log('made db ');
    })
    .catch(err => { console.log(err); })

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.listen(PORT, () => console.log('server is uriing '));