// DEEP Copy in JavaScrip
let user ={
    name: "Akash",
    age: 20,
    address:{
        city:"Delhi",
        pincode:273303
    }
};

 // let usercopy = JSON.parse(JSON.stringify(user)); //deep copy using JSON methods
 let usercopy = structuredClone(user); //deep copy using structuredClone
 usercopy.address.city = "Noida";
 console.log(user);
 console.log(usercopy);