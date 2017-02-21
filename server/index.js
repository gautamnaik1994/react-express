const express = require('express') ;
const http = require('http') ;
const morgan = require('morgan');
const bodyParser = require('body-parser') ;
const router = require('./router');
require('./db/mongoose');



const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);


const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`);