"use strict";

class User {
  constructor(username, email, password) {
    //constructors are methods that will run when you're class is instantiated
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static countUsers() {
    console.log("There are 50 users");
  }

  //methods are just functions that belond to a class
  register() {
    console.log(this.username + " is now registered");
  }
}

//let bob = new User("bob", "bob@email.com", "12345encrypted");

//bob.register();

//User.countUsers();

class Member extends User {
  constructor(username, email, password, memberPackage) {
    super(username, email, password); //will take the properties from the User class w/out us needs to copy/paste it all
    this.package = memberPackage;
  }

  getPackage() {
    console.log(
      this.username + " is subscribed to the " + this.package + " package"
    );
  }
}

let mike = new Member("mike", "mike@email.com", "password123", "Standard");

//mike.getPackage();
mike.register();
