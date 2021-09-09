    // interface Animal {
    //     name: string;
    //     age: number;
    //     sex: string;
    // }

// abstract class Person implements Animal{
//      name: string;
//      age: number;
//      sex: string;
//     private birthday: Date;
//     private HP: number;

//     constructor(name: string, age: number, HP: number) {
//         this.name = name;
//         this.age = age;
//         this.HP = HP;
//     }

//     get personName() {
//         return this.name;
//     }

//     set personName(name: string) {
//         this.name = name;
//     }

//     get personAge() {
//         return this.age;
//     }

//     get personBirth() {
//         return this.birthday;
//     }

//     get personHP() {
//         return this.HP;
//     }

//     set editHP(hp: number) {
//         this.HP += hp;
//     }

//     set editAge(age: number) {
//         this.age = age;
//     }

//     abstract eat(food: string);
// }

// class Student extends Person{
//     private major: string;

//     constructor(name: string, age: number, major: string) {
//         super(name,age, 100);
//         this.major = major;
//     }

//     get allinformation() {
//         return {name: this.personName, age: this.personAge, major: this.major}
//     }

//     eat(food: string) {
//         this.editHP += 100;
//         console.log(`${this.personName} ate: ${food}`);

//     }
// }
// const smith = new Student("Smith", 15, "Literature");
// smith.eat("banana");

// const ningen = new Student("Adam", 35, "Literature");
// console.log(smith.allinformation);