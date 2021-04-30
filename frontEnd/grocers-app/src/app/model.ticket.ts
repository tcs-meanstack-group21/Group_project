export class Ticket{
    constructor(public _id:number,
            public body: String,
            public customer: Number,
            public status: String,
            public dateOpened: Date,
            public dateClosed: Date){}
}