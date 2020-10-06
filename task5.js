let user = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}

function accessAllowed(user) {
    if (user.isAdmin) {
        if (+user.age >= 18 && +user.age <= 35) {
            return true;
        }
    } else if (+user.age >= 18 || +user.age <= 35) {
        if (user.paid) {
            if (!user.blocked) {
                if (!user.badUsername) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(accessAllowed(user));