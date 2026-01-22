function identity<T> (args : T) : T{
    return args
}

let hellow : string = identity<string>("Hello world");
console.log(hellow);

