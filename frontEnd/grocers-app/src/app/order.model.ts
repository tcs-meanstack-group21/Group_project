export class Order {
    constructor(
        public _id: Number,
        public customer: Number,
        public cart: Array<any>,
        public dateOrdered: Date,
        public dateDelivered: Date,
        public orderStatus: String,
        public cancellationReason: String
    ) { }
}