import { Account } from "./Account";

export class CheckingAccount extends Account {
  overdraftLimit: number;

  constructor(id: number, number: string, balance: number = 0, limit: number = 0) {
    super(id, number, balance, "checking");
    this.overdraftLimit = limit;
  }

  withdraw(value: number): boolean {
    if (value <= this.balance + this.overdraftLimit) {
      this.balance -= value;
      return true;
    }
    return false;
  }
}