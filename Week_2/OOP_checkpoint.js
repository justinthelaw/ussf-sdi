// Object Oriented Bank Accounts
// Below, you have a stubbed out BankAccount class, and you also have two subclasses that need to inherit from that BankAccount class: CheckingAccount and SavingsAccount. Please implement the following functionality to pass the tests!

// BankAccount
// Given the BankAccount class below, implement its stubbed out methods.

// CheckingAccount
// Do the same for CheckingAccount as you did for BankAccount, but add a little more functionality specific to checking accounts. Checking accounts are penalized when they dip below a $50 balance. If the balance in the account hits below $50, there is a $40 fee applied to the checking account. Account holders should be prevented from making debits that will overdraft the account.

// SavingsAccount
// Do the same for SavingsAccount as you did for CheckingAccount! Savings accounts can only be debited from 10 times during the existence of the account, and any additional debits or transfers will result in a $50 debit from their savings account. Account holders are also able to transfer money from their savings account to their checking account using the transfer method you see stubbed out. In addition to this, savings accounts have the same credit (deposit), debit (withdrawal), checkBalance and getTransactions methods as its parent class, BankAccount.

// Feel free to edit anything you want to implement the functionality you need.

class BankAccount {
  constructor(balance = 0, credits = [], debits = []) {
      this.balance = balance;
      this.credits = credits;
      this.debits = debits;
  }

  credit(amount){
    this.balance += amount;
    this.credits.push(amount);
  } //adds money into account

  debit(amount){
    this.balance -= amount;
    this.debits.push(amount);
  } //deducts money from account

  checkBalance(){
    return `Your account balance is $${this.balance}`
  } //gives user their balance with a message "Your account balance is $120" (or whatever accurate amount is)

  getTransactions(){
    let transactionList = {
      credits: this.credits,
      debits: this.debits
    }
    return transactionList;
  } //returns an object of all transactions
  // transactions data should be stored like:
  //   transactions = {
  //       credits: [],
  //       debits: []
  //
  //   }
}


class CheckingAccount extends BankAccount{
  constructor(balance, credits, debits) {
    super(balance, credits, debits); // this isn't actually required unless you are adding attributes to the constructor
  } // needs to be a subclass of BankAccount

  debit(amount) {
    if (this.balance < amount) {
        return 'debit denied: insufficient funds';
    } else {
      super.debit(amount);
      if (this.balance < 50) {
        this.debit(40);
      }
    }
  }
}


class SavingsAccount extends BankAccount{ // needs to be a subclass of BankAccount
  constructor(balance, credits, debits, remainingDebits = 10) {
    super(balance, credits, debits);
    this.remainingDebits = remainingDebits
  }

  linkToChecking(acct){
    this.linked = acct;
  } // needs to be able to inject access to an instance of a CheckingAccount so that the transfer method can work

  transfer(amount){
      this.linked.credit(amount);
      this.debit(amount);
      this.remainingDebits--
      if (this.remainingDebits < 0) {
          this.balance -= 50;
      }
  } // should return "Transfer denied: no linked checking account" if there is no linked checking account
  // can transfer money from savings to checking (unidirectional)

  static transfer(amount) {
      return 'Transfer denied: no linked checking account';
  }

  credit(amount){
    super.credit(amount);
  }

  debit(amount){
    if (this.balance < amount) {
      return 'debit denied: insufficient funds';
    } else {
      super.debit(amount);
      this.remainingDebits--
      if (this.remainingDebits < 0) {
          this.balance -= 50;
      }
     }
  }

  checkBalance(){
    super.checkBalance();
  }

  getTransactions(){
    super.getTransactions()
  }
}