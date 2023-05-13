export const checkUser = (dbUsers, verifiableData) => {
    if (dbUsers[verifiableData.login]) {
        return dbUsers[verifiableData.login];
    }
    return undefined;
}