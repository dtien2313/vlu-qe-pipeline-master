// Login function
function login(username, password) {
    if (username === 'admin' && password === '') {
        return true;
    }

    return false;
}

module.exports = login;
