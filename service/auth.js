const sessionTokenToUserMap = new Map();

function setUser(id, user) {
    sessionTokenToUserMap.set(id, user);
}

function getUser(id) {
    return sessionTokenToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser,
};