const account = {
    accountName: "Dante",
    balance: 1000,

    getBalance: function () {
        alert(`Balance: ${this.balance}`);
    },

    deposit: function (amount) {
        if (isNaN(amount) || amount <= 0) {
            this.accountError();
            return;
        }
        this.balance += amount;
        alert(`Deposited: ${amount}`);
    },

    withdrawal: function (amount) {
        if (isNaN(amount) || amount <= 0 || amount > this.balance) {
            this.accountError();
            return;
        }
        this.balance -= amount;
        alert(`Withdrawn: ${amount}`);
    },

    getAccountName: function () {
        alert(`Account holder: ${this.accountName}`);
    },

    accountError: function () {
        alert("Error: Invalid input");
    },

    exitAccount: function () {
        alert("Goodbye!");
    }
};

function atm() {
    let running = true;

    while (running) {
        const choice = prompt(
            "1. Balance\n2. Deposit\n3. Withdraw\n4. Account Name\n5. Exit"
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
        } else if (choice == 5) {
            account.exitAccount();
            running = false;
        } else {
            account.accountError();
        }
    }
}