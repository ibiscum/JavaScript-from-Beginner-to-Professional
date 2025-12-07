class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullname(){
    return this.firstname + " " + this.lastname;
  }
}

let person1 = new Person("Maaike", "van Putten");
console.log(person1.fullname());

let person2 = new Person("Laurence", "Svekis");
console.log(person2.fullname());
