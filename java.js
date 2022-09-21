//made changes in java.js



// let text = "Apple, Banana, Mango";
// let str = text.slice(15, 4);
// console.log(str)
//
// let text1 = "i am ugyen";
// let str2 = text1.replace("ugyen", "lekzin");
// console.log(str2)
//
// let text3 = "Hello World";
// let str3 = text3.charCodeAt(1)
// console.log(str3)
//
// let text4 = "a, b, c, d";
// let comma = text4.split(" ")
// console.log(comma)


//Assignment on variable, constant, data types and operators
// let userInput = 9;
// let result;
//
// result = 18 + userInput;
//
// result = result - 2;
// result = result * 5;
// result = result / 5;
//
// alert(result);
// alert(userInput);


// function reverseNumber(x){
//     x = x + " " //it will convert the number into string
//     return x.split("").reverse().join("")
// //split("") it will split the string ["3", "2", "2", "4"]
// //    reverse() it will reverse the split string ["4", "2", "2", "3"]
// //    join("") it will join the string [4223]
//
// }
// console.log(Number(reverseNumber(3224)))
//
// const random = ['tree', 795, [0, 1, 2]];
// console.log(random[2][2]);

//import of the classes
// import {name, status} from "./javascriipt.js";

// const a = new XMLHttpRequest()
//
// a.open('GET', 'https://www.tbankltd.com/home/posts')
// a.send()

// class Course {
//     constructor(title, length, price){
//         this.title = title;
//         this.length = length;
//         this.price = price;
//     }
//     calculateLength(){
//         return this.length/this.price
//     }
//     SumOFAll(){
//         // console.log(`title: ${this.title}, length: ${this.length}, price: ${this.price}`)
//         return `title: ${this.title}, length: ${this.length}, price: ${this.price}`
//     }
//
// }


// //dummy course
// const course = new Course("Math", 124, 360)
// let course1 = new Course("English", 100, 260)
//
// console.log(course)
// console.log(course.title)
// console.log(course.calculateLength())
// console.log(course1.SumOFAll())


// Object
//creating new object using new keyword
// const person = new Object();
// person.firstName = "ugyen";
// person.lastNmae = "lekzin";
// console.log(person.firstName)
// console.log(person)

//adding new properties in already existing object
// const person = {
//     name: "ugyen",
//     age: 35,
//     gender: "female"
// }
// person.nationality="bhutanese"; //adding the new properties
// console.log(person)

//deleting the property from object
// const person = {
//     name: "ugyen",
//     age: 35,
//     gender: "female"
// }
// delete person.age;
// delete person["name"];
// console.log(person)


//nested object
// const person = {
//     name: "ugyen",
//     age: 35,
//     gender: "female",
//
//     secondPerson: {
//         name: "sonam",
//         age: 65,
//         gender: "male"
//     }
// }
// console.log(person.secondPerson.name);


// const b = /h/
// const a = b.test("hello i am good and how are you?")
// console.log(a)
//
// const bz = /very/g
// const az = bz.exec("A very good very morning ")
// console.log(az)
//
// const c = /hot/g
// const cz = c.match("the weather is hot today. very hot")
// console.log(cz)






