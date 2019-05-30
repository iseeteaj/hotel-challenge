const mongoose = require('mongoose');
const app = require('./src/app');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
 console.log('I am working - live from index.js!!!');
 app.listen(3000);
});