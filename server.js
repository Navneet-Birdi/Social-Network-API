const express = require('express');
const apiRoutes = require('./routes/api');
require('./config/connection');

const app = express();
const PORT = process.env.port || 3001;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

//sync sequelize models to the database, then turn on the server

app.listen(PORT, () => {
    console.log('app is listening on port ${PORT}');
});
