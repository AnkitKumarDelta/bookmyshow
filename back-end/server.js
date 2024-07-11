const express = require("express");
const app = express();
const connectDB = require('./dbConnection')
const Ticket = require('./schema');
const cors = require("cors");
const dotenv = require('dotenv');

const coreoptions = {
    origin:'http://localhost:3000',
    credentials: true,  // Allow cookies and other credentials to be sent
}
app.use(cors(coreoptions));
//Middleware for parsing Json
app.use(express.json());

dotenv.config({});
//Connecting to Database
connectDB();
app.use(express.urlencoded({ extended: false }))
// creating an api and seperating it.
app.use("/api", require("./routes"));

app.listen(8081,()=>{
    console.log("App listening to port 8081")
});