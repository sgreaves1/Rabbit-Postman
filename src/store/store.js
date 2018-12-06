export function storeUser(userData) {
    try {
        localStorage.setItem('userData', JSON.stringify(userData));
    } catch (err) {
        console.log(err);
    }
}

export function loadUser() {
        return JSON.parse(localStorage.getItem('userData'));
}

// function deleteUser() {
//     return storage.delete('userData');
// }
//
// function deleteRequest(name) {
//     let user = loadUser();
//
//     console.log(user);
//
//     for(var i = 0; i < user.requests.length; i++) {
//         if (user.requests[i].name === name)
//             user.requests.splice(i, 1);
//     }
//
//     storeUser(user);
//
//     console.log(user);
// }
//
// module.exports = {storeUser, loadUser, deleteUser, deleteRequest};