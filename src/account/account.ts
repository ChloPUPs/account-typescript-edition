class Account {
    #userName: string;
    #displayName: string;
    #passWord: string;
    #eMail: string;

    loggedIn: boolean;

    constructor(userName: string, displayName: string, passWord: string, eMail: string) {
        if (userName.includes(" ")) {
            throw new Error("`userName` contains character: ' '.");
        }
        if (eMail.includes(" ")) {
            throw new Error("`eMail` contains character: ' '.");
        }
        this.#userName = userName;
        this.#displayName = displayName;
        this.#passWord = passWord;
        this.#eMail = eMail;
        this.loggedIn = true;
    }

    displayInfo() {
        let stringDetails = [
            `\n\tUser Name: ${this.#userName}`,
            `\n\tDisplay Name: ${this.#displayName}`,
            `\n\tPassWord: ${this.#passWord}`,
            `\n\tEMail: ${this.#eMail}\n`,
        ];
        stringDetails.join();
        console.log(`Your Account -> {${stringDetails}}`);
    }

    post(message: string) {
        console.log(`Created new post!!\n${this.#userName}: ${message}`);
    }
}

export default Account;
