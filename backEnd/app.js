const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 9090;
const url = "mongodb://localhost:27017/meanstack";


app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors());   

const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption); 
mongoose.Promise = global.Promise;
mongoose.connection


let route = require("./router/router.js");
app.use("/",route)


app.listen(port,()=> console.log(`Server running on http://localhost:${port}`));
