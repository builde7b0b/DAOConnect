const express = require('express');
const app = express();

// define routes and middleware 

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`)
})


