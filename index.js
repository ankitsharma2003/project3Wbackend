const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
const authRouter = require('./routers/authRouter');
const dataRouter = require('./routers/dataRouter')
const morgan = require('morgan');
const cors = require('cors')
const cookieParser = require('cookie-parser');
dotenv.config('./.env');

// const crypto = require('crypto');
// const cryptoBytes = crypto.randomBytes(64).toString('hex');
// console.log(cryptoBytes);

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('common'));
app.use(cookieParser())
app.use(cors({
    credentials : true,
    origin : 'http://localhost:3000'
    
}))


app.use('/auth', authRouter);
app.use('/data', dataRouter);

app.get('/', (req, res) => {
     res.status(200).send('OK from Server');
})

const PORT = process.env.PORT || 4001;

//call database
dbConnect();

app.listen(PORT, () => {
    console.log(`listening on port : ${PORT}`);
})
