import UserData from "./UserData";

function storeUser(userData) {
    localStorage.setItem('userData', userData);
}

export function loadUser() {
    try {
        const serializedState = localStorage.getItem('userData');
        if (serializedState === null) {
            return new UserData();
        }
        return serializedState;
    } catch (err) {
        return new UserData();
    }
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