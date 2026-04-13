import { ask } from "./utils.js";

let res: string = await ask("Speak");

console.log("You said:", res);
