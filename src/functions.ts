import { sayhello } from "./type";

export function sayHello({ firstname, lastname }: sayhello) {
    console.log('Hello');
    console.log(`Your first name is ${firstname}`);
    if (lastname) {
        console.log(`Your last name is ${lastname}`);
    }
}