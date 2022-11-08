export function ValidateName(name) {
    if (name !== "") {
        return name;
    }
}
export function ValidateLastname(lastname) {
    if (lastname !== "") {
        return lastname;
    }
}

export function ValidateEmail(email) {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email !== "") {
        return re.test(String(email).toLowerCase());
    }
}
export function ValidatePasswordtwo(password) {
    if (password.length >= 6) {
        return password;
    }  
}
export function ValidatePassword(password,passwordrep) {
    if (password === passwordrep && password.length >= 6) {
        return password;
    }  
}

// export function ValidateIagree(iagree) {
//     if (iagree == true) {
//         return iagree;
//         iagree = false;
//     }else {
//                 return iagree;

//     }
// }

export function ValidateMessage(message) {
    if (message !== "" && message.length >= 5) {
        return message;
    }
}
