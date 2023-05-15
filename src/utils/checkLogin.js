export const checkLogin = (dbUsers, login) => {
    if (dbUsers[login]) {
        return dbUsers[login];
    }
    return undefined;
}