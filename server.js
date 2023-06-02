require('dotenv').config();

const app = require('./src/app');

const {PORT} = process.env || 8001;

app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`)
})
