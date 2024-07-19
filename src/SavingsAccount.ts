import { Account } from "./Account";

export class SavingsAccount extends Account {
  interestRate: number;

  constructor(id: number, number: string, balance: number = 0, rate: number = 0.02) {
    super(id, number, balance, "savings");
    this.interestRate = rate;
  }

  applyInterest(): void {
    this.balance += this.balance * this.interestRate;
  }
}