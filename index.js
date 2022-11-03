const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// middlewared
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        message: 'Ema-John Simple Server',
    });
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
