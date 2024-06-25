import { authUser,userExists } from "./services/authService.js";

console.log('Test');

// console.log(authUser('Rosie Cat', password123))
const user = await userExists('Blah')
console.log(user)