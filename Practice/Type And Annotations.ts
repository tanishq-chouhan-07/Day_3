type User = {
    name : string;
    age : number;
    addresses : string[];
    mobile : number;
    isVerified : boolean;
}

type BlogPost = {
    title : string ;
    description : string;
    likes : number;
    author : string;
}

type Order = {
    OrderId  : string;
    isPaid : Boolean;
    Status : string;
}
