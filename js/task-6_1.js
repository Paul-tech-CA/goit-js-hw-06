import users from './users.js';

// // console.log(names);

// const getUserNames = users => users.map(user => user.name);

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// const getUsersWithGender = (users, gender) =>
// users.filter(user => user.gender === gender).map(user => user.name);

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// const getInactiveUsers = (users, isActive) =>
//   users.filter(user => !user.isActive);

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age > min && user.age < max);
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// const calculateTotalBalance = users =>
//   users.reduce((acc, { balance }) => acc + balance, 0);

// console.log(calculateTotalBalance(users)); // 20916

// //------------------------ task 8 ???? ------

// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// //-------------------------- task 9 -------
// // Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   return users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//==================================================== 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений
// и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   const result = users.flatMap(user => user.skills).sort();
//   return result.filter((item, index) => result.indexOf(item) === index);
// };

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Привет! Очень хорошо сделать деструктуризацию аргументов
// // Пример:
// // users.filter(user => user.eyeColor === color);
// // И с деструтуризацией
// // users.filter(({ eyeColor }) => eyeColor === color);

// Task 10 flatMap попробуй без него.
// djn nfr
// [].reduce().filter(),sort()

//=======================================

// function filterArray(numbers, value) {

//   return numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//================================

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter(({ score }) => score > 80);
// const worst = students.filter(({ score }) => score < 50);
// const average = students.filter(({ score }) => score >= 50 && score <= 80);

// console.table(best);
// console.table(worst);
// console.table(average);

//==============================================
const userses = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];
// const getFriends = userses => {
//   const allFriends = userses.flatMap(({ friends }) => friends);
//   return allFriends.filter(
//     (friend, index) => allFriends.indexOf(friend) === index,
//   );
// };
// console.log(getFriends(userses));

const getTotalBalanceByGender = (userses, gender) => {
  return userses
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);
};

console.table(getTotalBalanceByGender(userses, 'male'));
