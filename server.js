const express = require('express'); 
const morgan = require('morgan');
const bodyParser = require('body-parser');

const homedecorRouter = require('./routes/homedecorRouter');
const automotiveRouter = require('./routes/automotiveRouter');
/*
const electronicsRouter = require('./routes/electronicsRouter');
const fashionRouter = require('./routes/fashionRouter');
const outdoorsRouter = require('./routes/outdoorsRouter');
const petRouter = require('./routes/petRouter');
const cartRouter = require('./routes/cartRouter');
*/

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/homedecor', homedecorRouter);
app.use('/automotive', automotiveRouter);
/*
app.use('/electronics', electronicsRouter);
app.use('/fashion', fashionRouter);
app.use('/outdoors', outdoorsRouter);
app.use('/pet', petRouter);
app.use('/cart', cartRouter);
*/

app.use(express.static(__dirname + '/public'));  //get express to serve files from public folder

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});