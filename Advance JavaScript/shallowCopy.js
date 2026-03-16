let user ={
    name: "Akash",
    age: 20,
    address:{
        city:"Delhi",
        pincode:273303
    }
};

// let usercopy ={...user}; //spread operator for shallow copy
// usercopy.address.city = "Noida";
// console.log(user);
// console.log(usercopy);

 let usercopy = Object.assign({}, user);
 usercopy.address.city = "Noida";
 console.log(user);
 console.log(usercopy);
