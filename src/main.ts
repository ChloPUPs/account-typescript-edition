import readline from "node:readline"

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Do you exist?: ", (answer: string) => {
    console.log(`You said: ${answer}`);
});
