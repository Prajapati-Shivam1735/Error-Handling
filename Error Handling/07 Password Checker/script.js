class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    // Getter method for password
    get password() {
        return this._password.replace(/./g, '*'); // Replace all characters with asterisks
    }

    // Setter method for password
    set password(newPassword) {
        if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

// Example usage
const user1 = new User("Mithun", "Secret123");
console.log(user1.password); 

user1.password = "newPass123";
console.log(user1.password); 

user1.password = "weak"; 

