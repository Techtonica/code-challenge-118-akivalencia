// # Parrot Class Revisited
//
//
//
// To gain practice with ES2016 `Class` syntax, let's reimplement our talking parrot class from Challenge 116.
//
//
// ```
//code from challenge 116 

class Parrot {
    //default parameters 
    constructor(name = 'A nameless parrot') {
      this.name = name;
      }
    //method speak 
     speak(){
          return (this.name + " want a cracker!");
        }
      }

//subclass ApprenticeParrot

class ApprenticeParrot extends Parrot {
  constructor(name){
    super(name);
    //create counter variable
    this.count= 1;
    //so that it increments when calling it
  }
  //overriding super class
  speak() {
    if (this.count < 4) {
      // console.log(this.count);
      //increment before return statement
      this.count++
      return "😴";
    } else {
      this.count++;
      return `${this.name} want a cracker!`;
    }
  }

}

// let polly = new Parrot("Polly");
// polly.speak();
// // returns "Polly want a cracker!"


// const me = new ApprenticeParrot("Your Name");
// me.speak();
// return "😴"

module.exports = {Parrot, ApprenticeParrot};
