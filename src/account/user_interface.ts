import Account from "./account.js";
import { ask, askNoSpaces } from "../utils.js";

export function printTitle() {
    console.log("--ACCOUNT v0.1.0 (ts-edition)--");
}

export async function promptInfo(): Promise<Account> {
    let userName: string = await askNoSpaces("User Name");
    let displayName: string = await ask("Display Name");
    let passWord: string = await askNoSpaces("Password");
    let eMail: string = await askNoSpaces("EMail");

    let newAccount = new Account(userName, displayName, passWord, eMail);
    return newAccount;
}

export async function promptLoggedIn(account: Account) {
    do {
        console.log("\n(1) Display Account Info, (2) Post, (3) Log Out");

        let input: string = await ask("");
        switch (input) {
            case "1": // Display Account Info
                account.displayInfo();
                break;
            case "2": // Post
                console.log("\nWhat would you like to post?");
                let postInput = await ask("");
                account.post(postInput);
                break;
            case "3": // Log Out
                console.log("Goodbye! Logging off...");
                account.loggedIn = false;
                break;
            default: // Invalid Input
                console.log(`Invalid Input: '${input}' is not an option.`);
                break;
        }
    } while (account.loggedIn);
}
