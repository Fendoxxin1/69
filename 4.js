"use strict";
class BankAccount {
    constructor(accountNumber, ownerName, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Summani to'g'ri kiriting.");
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= 0)
            throw new Error("Summani to'g'ri kiriting.");
        if (amount > this.balance)
            throw new Error("Yetarli mablag' mavjud emas.");
        this.balance -= amount;
    }
    get owner() {
        return this.ownerName;
    }
    set owner(newName) {
        if (newName.length < 3) {
            throw new Error("Ism kamida 3 harfdan iborat bo'lishi kerak.");
        }
        this.ownerName = newName;
    }
}
BankAccount.bankName = "MyBank";
class PremiumAccount extends BankAccount {
    constructor(accountNumber, ownerName, initialBalance = 0) {
        super(accountNumber, ownerName, initialBalance);
        this.cashbackRate = 0.02;
    }
    deposit(amount) {
        super.deposit(amount);
        const cashback = amount * this.cashbackRate;
        console.log(`${cashback} so'm cashback qo'shildi.`);
        super.deposit(cashback);
    }
}
const acc1 = new BankAccount("123456", "Ali", 1000);
console.log(acc1.getBalance());
acc1.deposit(500);
acc1.withdraw(300);
console.log(acc1.getBalance());
acc1.owner = "Vali";
console.log(BankAccount.bankName);
const premium = new PremiumAccount("987654", "Dilshod", 2000);
premium.deposit(1000);
console.log(premium.getBalance());
