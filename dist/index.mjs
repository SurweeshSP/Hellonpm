// src/functions.ts
function sayHello({ firstname, lastname }) {
  console.log("Hello");
  console.log(`Your first name is ${firstname}`);
  if (lastname) {
    console.log(`Your last name is ${lastname}`);
  }
}
export {
  sayHello
};
