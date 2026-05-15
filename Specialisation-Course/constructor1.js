
    class Animal {

    }

    class Cat extends Animal {
      constructor() {
        super();
        this.noise = "meow";
      }
    }

    var result = new Animal();
    console.log(result.noise);

    
    class Person {
        sayHello() {
            console.log("Hello");
        }
    }

    class Friend extends Person {
        sayHello() {
            console.log("Hey");
        }
    }

    var result = new Friend();
    result.sayHello();
