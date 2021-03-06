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
            if (!err1 && user.ticket == null && user.lockedStatus == true) {
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
                    } else res.send("Error generated at create ticket: ")
                })
            } else {
                res.send("User locked status: " + user.lockedStatus + " " + err1);
            }
        } else res.send("No user found");
    })
}

const deleteTicket = (req, res) => {
    const user = req.params.tick.customer
    const ticket = req.params.tick._id
    CustomerModel.findById(user, (error, result) => {
        if (result) {
            if (!error && result.lockedStatus == true) {
                TicketModel.deleteOne({_id: ticket}, (error2, data) => {
                    if (!error2) {
                        CustomerModel.findByIdAndUpdate(user, {lockedStatus: false }, (error3, ticketInfo) => {
                            if (!error3) {
                                res.send("Account has been unlocked. Ticket is resolved.")
                            } else {
                                res.send("Account could not be unlocked, please try again.")
                            }
                        })
                    } else {
                        res.send ("Error generated attempting to create ticket");
                    }
                })
            } else {
                res.send("User locked status " + result.lockedStatus + " " + error);
            }
        } else res.send("User not found, error in request");
    })
}

module.exports = { getTickets, raiseTicket, deleteTicket }