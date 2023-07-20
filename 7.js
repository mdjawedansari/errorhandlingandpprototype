// Password Checker.

const user = new User("johndoe", "Password123");
console.log(user.getPassword());

user.setPassword("myPassword"); 

user.setPassword("MyPassword"); 

user.setPassword("Mypassword123");
console.log(user.getPassword());


class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    getPassword() {
      return this.password.replace(/./g, "*");
    }
}