    //console.log('Hello, World!');
    //console.log('This is the index.js file.');
    //console.warn('This is a warning message.');
    //console.error('This is an error message.');
    // let a = 5;
    // let b = 7.8;
    // let c = "HIIIII";
    // let d;
    // let e = null;
    // let f = true;
    // console.log(typeof(a));
    //  console.log(typeof(b));
    //   console.log(typeof(c));
    //    console.log(typeof(d));
    //     console.log(typeof(e));
    //      console.log(typeof(f));

    //      let m = 10;
    //      let n = 2;
    //      //operator
    //      console.log("Addition:", m + n);
    //      console.log("Subtraction:", m - n);
    //      console.log("Multiplication:", m * n);
    //      console.log("Division:", m / n);
    //      console.log("Modulus:", m % n);
    //      console.log("Exponentiation:", m ** n);
    //      console.log("Increment:", ++m); 
    //      console.log("Decrement:", --n);
    //      console.log("Floor Division:", Math.floor(m / n));
          
    // function
    // function add(p,q){
    //             console.log(p+q);
    //         }
    //         add(3,5);
              

    //Array Function
    const multiply=(p,q)=>p*q;
    console.log("Arrow function", multiply(5,6));

    //Array
    let arr=[12,34,54,67];
      arr.push(89);
    //   arr.pop();
    //   arr.pop();
    for(let i=0;i<5;i++){
         console.log(arr[i]);
    }
    console.log(arr[0]);

    //object
    let student={
        name : "Akash",
        age: 23,
        course:"B.Tech"
    };

    console.log(student.name);
    console.log(student.age);
    console.log(student.course);

    //Date and Time
    let date = new Date();
    console.log(date);

    //time complexicity
    console.time("Test");
    for(let i=0;i<10000;i++){  
    }
      console.timeEnd("Test");

      // Group
     console.group("Group Name");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

    //Count
    console.count("a")
     console.count("a")
      console.count("a")
       console.count("b")
        console.count("a")
         console.count("c")
          console.count("a")
           console.count("c")
            console.count("a")
        
        //Table
        let student1={Name:"Akash",Age:20,Courses:"B.Tech"}
        console.table(student1);



  