import { Customer } from "./Customer";
import { IAccount } from "./interfaces/Account";

export abstract class Account implements IAccount {
  id: number;
  number: string;
  balance: number;
  type: "checking" | "savings";

  constructor(id: number, number: string, balance: number = 0, type: "checking" | "savings") {
    this.id = id;
    this.number = number;
    this.balance = balance;
    this.type = type;
  }

  deposit(value: number): void {
    this.balance += value;
  }

  withdraw(value: number): boolean {
    if (value <= this.balance) {
      this.balance -= value;
      return true;
    }
    return false;
  }

  transfer(value: number, destiny: IAccount): boolean {
    if (this.withdraw(value)) {
      destiny.deposit(value);
      return true;
    }
    return false;
  }
}