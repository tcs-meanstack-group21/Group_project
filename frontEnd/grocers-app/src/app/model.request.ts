export class Request{
    constructor(public _id: Number, 
        public SKU: Number,
        public name: String, 
        public price: Number, 
        public currentQuantity: Number,
        public requestQuantity: Number,
        public empId: Number){}
}