import readline from "node:readline"

export function ask(question: string): string | undefined {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question(`${question}: `, answer => {
        console.log("wow! you said:", answer);
        rl.close();
        return answer;
    });
    return;
}
