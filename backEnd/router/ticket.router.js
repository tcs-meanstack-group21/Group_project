const express = require("express");
const router = express.Router();
const TicketController = require("../controller/ticket.controller");

router.get("/", TicketController.getTickets);
router.post("/raiseTicket", TicketController.raiseTicket);

module.exports = router;