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

const getSortedUniqueSkills = users => {
  const result = users.flatMap(user => user.skills).sort();
  return result.filter((item, index) => result.indexOf(item) === index);
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
