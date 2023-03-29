function fullName(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  return fullName;
}

var result = fullName("Abdul", "Rehman");
console.log(result);

function sum(value1, value2) {
  var total = value1 + value2;
  console.log("The sum of " + value1 + " and " + value2 + " is: " + total);
}

sum(10, 20);
sum(50, 70);

function findByName(items, name) {
  const item = items.find((item) => {
    return item.name === name;
  });
  console.log(item);
}

const students = [
  {
    name: "Shameel",
    age: 18,
    email: "khanzada1@gmail.com",
  },
  {
    name: "Shameel",
    age: 18,
    email: "khanzada1@gmail.com",
  },
  {
    name: "Abdul Rehman",
    age: 24,
    subjects: ["Math", "Chemistry"],
  },
  {
    name: "Sajid",
    age: 19,
    email: "sajid@gmail.com",
  },
  {
    name: "Shameel",
    age: 15,
  },
  {
    name: "Ali",
    age: 28,
    email: "ali1@gmail.com",
  },
  {
    name: "Taha",
    age: 20,
    email: "taha1@gmail.com",
  },
  {
    name: "Basit",
    age: 18,
    email: "basit@gmail.com",
  },
  {
    name: "Asad",
    age: 20,
    email: "asad@gmail.com",
  },
  {
    name: "Talha",
    age: 15,
    email: "talha@gmail.com",
  },
  {
    name: "Shameel",
    age: 10,
    email: "shameel1@gmail.com",
  },
  {
    name: "Saad",
    age: 19,
    email: "saad@gmail.com",
  },
  {
    name: "Saif",
    age: 22,
    email: "saif2@gmail.com",
  },
  {
    name: "Shameel",
    age: 18,
    email: "khanzada1@gmail.com",
  },
  {
    name: "Ahmed",
    age: 12,
    email: "ahmed1@gmail.com",
  },
  {
    name: "Ali",
    age: 24,
    email: "ali@gmail.com",
  },
];

const student = findByName(students, "Shameel");
// const student2 = findByName(students, "Abdul Rehman");
// findByName(students, "Shameel");
// findByName(students, "khanzada");y

function findBySubject(items, subject) {
  const item = items.find((item, i) => {
    return item.subject === subject;
  });
  console.log(item);
}

const teachers = [
  {
    name: "Sir Taha",
    age: 22,
    subject: "Eng",
  },
  {
    name: "Sir Ahmed",
    age: 24,
    subject: "Urdu",
  },
  {
    name: "Sir Rehan",
    age: 30,
    subject: "Math",
  },
];

const teacher = findBySubject(teachers, "Math");
const teacher2 = findBySubject(teachers, "Urdu");

function findBySalary(items, salary) {
  const item = items.find((item) => {
    return item.salary === salary;
  });
  console.log(item);
}

const employees = [
  {
    name: "Ali",
    salary: 20000,
    age: 27,
  },
  {
    name: "Usama",
    age: 31,
    salary: 25000,
  },
];

const employee = findBySalary(employees, 25000);
const employee2 = findBySalary(employees, 20000);

function filterByName(items, name) {
  const filteredItems = items.filter((item) => {
    return item.name === name;
  });
  return filteredItems;
}
const filteredStudents = filterByName(students, "Shameel");
console.log(filteredStudents);

// array.map
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);
console.log(numbers);

// forEach
const numbers1 = [1, 2, 3, 4];
numbers1.forEach((num) => console.log(num * 2));
console.log(numbers1);

const players = [
  {
    firstName: "Usama", lastName: "Ghochoo"
  },
  {
    firstName: "Shameel", lastName: "Topi Baaz"
  }
];

const updatedPlayers = players.map((player) => {
  return {fullName: player.firstName + " " + player.lastName}
});
console.log(updatedPlayers);


