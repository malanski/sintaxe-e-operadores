class BankAccount {
    constructor(agency, number, type ) {
        this.agency = agency;
        this.number = number;
        this.type = type;
        this._balance = 0;
    }

    get balance() {
        return this._balance;
    }
    
    set balance(value) {
        this._balance = value;
    }

    withdraw(value) {
        if (value > this._balance) {
            return "Not enough funds to withdraw from this bank account."
        }
        this._balance = this._balance - value;

        return this._balance
    }
    deposit(value) {
        this._balance = this._balance + value
        return this._balance
    }
}


class CheckingAccount extends BankAccount {
    constructor(agency, number, creditCard) {
       super(agency, number);
       this.type = "checkingAccount";
       this.creditCard = creditCard;
    }

    get creditCard() {
        return this._creditCard;
    }
    
    set creditCard(value) {
        this._creditCard = value;
    }
}


class SavingAccount extends BankAccount {
    constructor(agency, number) {
       super(agency, number);
       this.type = "savingAccount";
    }
}


class UniversityAccount extends BankAccount {
    constructor(agency, number) {
       super(agency, number);
       this.type = "universityAccount";
    }

    withdraw(value) {
        if(valor = 500) {
            return "Operation denied!"
        }
        this._balance = this._balance - value;
    }
}


//  Use this  code example to create a account: const minhaConta = new CheckingAccount(1, 123, true) 
//  Then use this to manipulate it: minhaConta.balance or minhaConta.deposit(1000) and minhaConta.withdraw(500).