// array shallow copy

let arr = [1,2,3,4,5];
let arrcopy = [...arr]; //spread operator for shallow copy
arrcopy[0] = 10;
console.log(arr);
console.log(arrcopy);

// array with objects
let user = [

    {
        name : "Akash"
    },

    {
        name : "Vikas"
    }
];

let usercopy = [...user]; //spread operator for shallow copy
usercopy[0].name = "Rohit";
console.log(user);
console.log(usercopy);