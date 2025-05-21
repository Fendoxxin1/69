class BankAccount {
  readonly accountNumber: string;

  public ownerName: string;

  private balance: number;

  static bankName: string = "MyBank";

  constructor(
    accountNumber: string,
    ownerName: string,
    initialBalance: number = 0
  ) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = initialBalance;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) throw new Error("Summani to'g'ri kiriting.");
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Summani to'g'ri kiriting.");
    if (amount > this.balance) throw new Error("Yetarli mablag' mavjud emas.");
    this.balance -= amount;
  }

  get owner(): string {
    return this.ownerName;
  }

  set owner(newName: string) {
    if (newName.length < 3) {
      throw new Error("Ism kamida 3 harfdan iborat bo'lishi kerak.");
    }
    this.ownerName = newName;
  }
}

class PremiumAccount extends BankAccount {
  private cashbackRate: number = 0.02;

  constructor(
    accountNumber: string,
    ownerName: string,
    initialBalance: number = 0
  ) {
    super(accountNumber, ownerName, initialBalance);
  }

  public override deposit(amount: number): void {
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
