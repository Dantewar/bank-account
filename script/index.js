const account = {
    accountName: "Dante",
    balance: 1000,

    getBalance: function () {
        alert(`Balance: ${this.balance}`);
    },

    deposit: function (amount) {
        this.balance += amount;
        alert(`Deposited: ${amount}`);
    },

    withdrawal: function (amount) {
        this.balance -= amount;
        alert(`Withdrawn: ${amount}`);
    },

    getAccountName: function () {
        alert(`Account holder: ${this.accountName}`);
    }
};

function atm() {
    const choice = prompt(
        "1. Balance\n2. Deposit\n3. Withdraw\n4. Account Name"
    );

    if (choice == 1) {
        account.getBalance();
    } else if (choice == 2) {
        let amount = Number(prompt("Enter deposit amount:"));
        account.deposit(amount);
    } else if (choice == 3) {
        let amount = Number(prompt("Enter withdrawal amount:"));
        account.withdrawal(amount);
    } else if (choice == 4) {
        account.getAccountName();
    }
}