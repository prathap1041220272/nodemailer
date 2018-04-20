'use strict'
const express = require('express');
const app = express();
const port = process.env.PORT || 4568;

const sendMail =require('./lib/email');


app.listen(port,()=>{
	console.log(`server is listening on posrt ${port}`)
})