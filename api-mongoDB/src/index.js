const express = require('express');
const app = express();
const middlewareLogRequest = require('./middleware/logs')
const homeRoutes = require('./routes/home')
const cors = require('cors')
app.use(cors('http://localhost:3002/')) 



app.use(middlewareLogRequest);
app.use(express.json());
app.use('/', homeRoutes);

app.listen(3004, () => {
    console.log('sedang running')
})