//Create a Bank class with the the name and balance attributes. Afterwards, create an object of the class and follow the instructions below:
// Creates an account named "Matt's account" with the balance of 1000
// Creates an account named "My account" with the balance of 0
// Withdraws 100.0 from Matt's account
// Deposits 100.0 to My account
// Prints both accounts




class Bank {
    constructor(name,balance)
    {
        this.name= name;
        this.balance =  balance;
    }

    withdraw(amount)
    {
        this.balance = (this.balance - amount)
    }

    deposit(amount)
    {
        this.balance = (this.balance + amount)
    }

    printAll()
    {
        console.log(this.name + " balance: " + this.balance)
    }
}


var acc1 = new Bank("Matt's  account",1000);
var acc2 = new Bank("My account",0);


acc1.withdraw(100);
acc1.printAll()

acc2.deposit(100);
acc2.printAll()