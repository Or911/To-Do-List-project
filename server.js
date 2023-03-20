const express = require('express');
const app = express();
const path = require("path");
const DBConnection = require ('./server/utilities/DBConnection')
DBConnection.connectToDataBase()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));



const port =3002
app.listen(port,()=>{
    console.log(`Runing on port:  http://localhost:${port}`);
})