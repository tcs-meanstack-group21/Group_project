export class Order {
    constructor(
        public _id:number,
        public customer:number,
        public cart:number,
        public dateOrdered:Date,
        public dateDelivered: Date,
        public orderStatus:string,
        public cancellations:string){}
}