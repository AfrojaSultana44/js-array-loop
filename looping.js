/**
 * Looping Technique
 * 1.for loop
 * 2.while loop
 * 3.do while
 * 4.for of ---> array loop korar jonno
 * 5.for in ---> object loop korar jonno
 */

// for of
const friends = ["Elon", "Bill", "Mark", "Waren"];

for (const friend of friends) {
  // console.log(friend)
}

// for loop
for (let i = 0; i < friends.length; i++) {
  console.log(i)
  console.log(friends[i])
}

// while loop
let i = 0;
while (i < friends.length) {
  //   console.log(friends[i]);
  i++;
}

const numbers = [23, 56, 789, 987, 234, 58, 89];
for (i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]);
}

let n = 0;
while (n < numbers.length) {
//   console.log(numbers[n]);
  n++;
}
