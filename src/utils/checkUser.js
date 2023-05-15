export const checkUser = (dbUsers, token) => {
    for(let user in dbUsers) {
        if (dbUsers[user].token === token) {
            return dbUsers[user];
        }
    }
    return undefined;
}