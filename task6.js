let user = {
    age: 18,
    paid: true,
    blocked: false,
    badUsername: false,
    isAdmin: false
}

let accessAllowed = user.isAdmin ? (+user.age >= 18 && +user.age <= 35) :
    (+user.age >= 18 && +user.age <= 35)? user.paid ? !user.blocked ? !user.badUsername : false : false : false;

console.log(accessAllowed);