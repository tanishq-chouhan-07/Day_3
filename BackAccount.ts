class BackAccount {
    bankBalance : number;
    username : string;

    constructor (bankBalance:number, username : string){
        this.bankBalance = bankBalance;
        this.username = username;
    }

    deposit (value : number){
        this.bankBalance += value;
        console.log(`Current BankBalance is ${this.bankBalance}`);
    }
    
    withDraw(value : number){
        this.bankBalance -= value;
        console.log(`Current BankBalance is ${this.bankBalance}`);
    }
    
    showBalance (){
        console.log(`Current BankBalance is ${this.bankBalance}`);

    }
     
}

const Account : BackAccount = new BackAccount(0,"Tanishq");
Account.deposit(10000)
Account.showBalance()
Account.withDraw(300)