import UserData from "./UserData";

export function storeUser(userData) {
    try {
        localStorage.setItem('userData', userData);
        console.log('saved');
        console.log(userData);
    } catch (err) {
        console.log(err);
    }
}

export function loadUser() {
    try {
        const serializedState = localStorage.getItem('userData');
        if (serializedState === null) {
            return new UserData();
        }
        console.log(serializedState.toString());
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