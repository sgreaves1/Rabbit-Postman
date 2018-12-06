import UserData from "./UserData";

export function storeUser(userData) {
    try {
        localStorage.setItem('userData', JSON.stringify(userData));
    } catch (err) {
        console.log(err);
    }
}

export function loadUser() {
    try {
        return JSON.parse(localStorage.getItem('userData'));
        console.log(serializedState);
        if (serializedState === null) {
            return new UserData();
        }
        let user = new UserData();
        user.requests = serializedState.requests;

        return new UserData();
    } catch (err) {
        console.log(err);
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