function isEmailVerified(str : string) : boolean {
    return str.includes("@");
}

function ComparePassword (str : string , str1 : string) : boolean {
    return str == str1;
}

function CalculateTotalPrice (arr : number[]) : number {
    let sum : number = 0;
    arr.forEach((e)=>{
        sum = sum + e;
    })

    return sum;
}
