// Write a JavaScript code to reverse the array colors without using the reverse method.

const colors = ["red", "blue", "green", "yellow", "orange"];
// for of
const rev_colors = [];
for (const color of colors) {
    // console.log(color)
  rev_colors.unshift(color);
}

// console.log(rev_colors)

// for loop
const reversed_colors = [];

for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
  reversed_colors.unshift(colors[i]);
}

console.log(reversed_colors);
