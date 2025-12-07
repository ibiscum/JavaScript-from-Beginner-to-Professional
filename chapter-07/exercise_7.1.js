class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

let person1 = new Person("Maaike", "van Putten");
console.log("hello " + person1.firstname);

let person2 = new Person("Laurence", "Svekis");
console.log("hello " + person2.firstname);
