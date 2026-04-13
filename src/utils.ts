import readline from "node:readline";

export function ask(question: string): Promise<string> {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // Get Input. Looks complicated because of how js works
    return new Promise<string>(resolve => rl.question(`${question}: `, answer => {
        rl.close();
        resolve(answer);
    }));
}

export async function askNoSpaces(question: string) {
    let input: string
    let inputIsCorrect = false;

    do {
        input = await ask(question);
        input.trim();
        if (input.includes(" ")) {
            console.log("Invalid Input: Input contains non-trailing/leading ' ' characters.");
            continue;
        }
    } while (inputIsCorrect);

    return input;
}
