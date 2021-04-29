const TicketModel = require("../model/ticket.model");
const CustomerModel = require("../model/customer.model");

//get method
const getTickets = (req, res) => {
    TicketModel.find({}, (err, data) => {
        if (!err) res.json(data);
        else res.send("Error generated: " + err);
    })
}

//post method, to be updated
const raiseTicket = (req, res) => {
    const userId = req.body.uid;
    const ticketBody = req.body.ticketBody;
    CustomerModel.findById(userId, (err1, user) => {
        if (user) {
            if (!err1 && user.ticket == null) {
                TicketModel.create({ customer: userId, body: ticketBody }, (err2, ticketData) => {
                    if (!err2) {
                        CustomerModel.findByIdAndUpdate(userId, { ticket: ticketData }, { useFindAndModify: false }, (err3, data) => {
                            if (!err3) {
                                res.send("Ticket Successfully raised");
                                console.log("yes. raised")
                            } else { 
                                res.send("Could not update customer");
                                console.log("no...")
                            }

                        })
                    }
                })
            } else {
                res.send("Error generated: " + err1);
            }
        }
    })
}

module.exports = { getTickets, raiseTicket }