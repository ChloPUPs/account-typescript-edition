/*

-----Account Program-----
A CLI where you log into a fake account (TypeScript this time)

*/

import * as userInterface from "./account/user_interface.js";

userInterface.printTitle();
let account = await userInterface.promptInfo();
userInterface.promptLoggedIn(account);
