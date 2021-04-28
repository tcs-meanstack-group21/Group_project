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


const route = require("./router/router.js");
app.use("/",route)

const customerRouter = require("./router/customer.router.js");
app.use("/customer", customerRouter);

const productRouter = require("./router/product.router");
app.use("/product", productRouter);

const ticketRouter = require("./router/ticket.router")
app.use("/ticket", ticketRouter);

const orderRouter = require("./router/order.router");
app.use("/order",orderRouter)

const Employee = require("./router/employee.router.js");
app.use("/employee",Employee)

app.listen(port,()=> console.log(`Server running on http://localhost:${port}`));