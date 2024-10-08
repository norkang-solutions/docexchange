export default class UsernameAlreadyTakenError extends Error {
    constructor() {
        super("Username already taken");
    }
}
