// class User {
//     consturctor(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }

//     getBirthYear() {
//         return new Date().getFullYear() - this.age
//     }
//     getFullName() {
//         return this.fullName + ' ' + this.lastName                        
//     }

// }

// const user1 = new CreateUser('Ravish', 'Chandravanshi', 25);
// const user2 = new CreateUser('Dwarika', 'Ravish', 26);

// class User {
//     constructor(firstName, lastName, age) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//     }

//     static hi = 'hello';
//     hello = 'hello world';
  
//     getBirthYear() {
//       return new Date().getFullYear() - this.age
//     }
//     get FullName() {
//       return this.firstName + ' ' + this.lastName
//     }

//     set FullName(value) {
//         const [firstName, lastName] = value.split(' ');
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//   }

// class Student extends User {
//   constructor(firstName, lastName, age, standard) {
//     super(firstName, lastName, age)
//       this.standard = standard;
//   }
// }
  
//   const user1 = new Student('Aman', 'Mishra', 32, 'BCA')
//   const user2 = new Student('Anurag', 'Singh', 72, 10)

//   console.dir(Student);


// console.log(this);

// const myDate = new Date(1732675546);

// console.log(myDate.toString());

// console.log(myDate.toLocaleString('en-GB', { hour12: true }))
// console.log(myDate.getMonth() + ' month');
// console.log(myDate.getDay() + ' day');

// const user1DOB = '02/04/2000';
// const user2DOB = '03/06/1998';

// const user1Date = new Date(user1DOB.split('/').reverse())
// const user1DateS = new Date('02/04/2000')


// console.log(user1Date.getTime())
// console.log(user1DateS)


const myDate = new Date('10 DEC 2024 10:05:15.06')

console.log(myDate);