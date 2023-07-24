const express = require('express');
const app = express();
const cors = require('cors'); 
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

//i'm checking

app.get('/', (req, res) => {
    res.send('server is running')
})

app.listen(port, () => {
    console.log(`collage book is running on port ${port}`)
})
