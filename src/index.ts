import { CheckingAccount } from "./CheckingAccount";
import { Customer } from "./Customer";
import { SavingsAccount } from "./SavingsAccount";

const ana = new Customer(1, "Ana Luiza Sampaio", "Rua Anchieta, 10", "99999-9999");
const anaCheckingAccount = new CheckingAccount(1, "0001", 500, 1000);
const anaSavingsAccount = new SavingsAccount(2, "0002", 1000);

ana.addAccount(anaCheckingAccount);
ana.addAccount(anaSavingsAccount);

console.log(`Ana's checking account balance: $${anaCheckingAccount.balance}`);
console.log(`Ana's saving account balance: $${anaSavingsAccount.balance}`);

anaCheckingAccount.deposit(200);
anaSavingsAccount.withdraw(100);

console.log(`Ana's checking account balance after deposit: $${anaCheckingAccount.balance}`);
console.log(`Ana's saving account balance after withdraw: $${anaSavingsAccount.balance}`);

const jess = new Customer(2, "Jess", "Rua Anchieta, 20", "55555-5555");
const jessCheckingAccount = new CheckingAccount(3, "0003", 1000, 1500);

jess.addAccount(jessCheckingAccount);

console.log(`Jess' checking account balance: $${jessCheckingAccount.balance}`)

jessCheckingAccount.transfer(100, anaCheckingAccount);

console.log(`Jess' checking account balance after transaction: $${jessCheckingAccount.balance}`);
console.log(`Ana's checking account balance after transaction: $${anaCheckingAccount.balance}`);