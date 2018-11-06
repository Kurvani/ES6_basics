"use strict";

class User {
  constructor(username, email, password) {
    //constructors are methods that will run when you're class is instantiated
    this.username = username;
    this.email = email;
    this.password = password;
  }

  //methods are just functions that belond to a class
  register() {
    console.log(this.username + " is now registered");
  }
}

let bob = new User("bob", "bob@email.com", "12345encrypted");

bob.register();
