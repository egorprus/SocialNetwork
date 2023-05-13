export const checkUser = (dbUsers, verifiableData) => {
    if (dbUsers[verifiableData.login] && dbUsers[verifiableData.login].password === verifiableData.password) {
        return dbUsers[verifiableData.login];
    }
    return undefined;
}