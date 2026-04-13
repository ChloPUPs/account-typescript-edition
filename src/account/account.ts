class Account {
    #userName: string;
    #displayName: string;
    #passWord: string;
    #eMail: string;

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
    }
}
