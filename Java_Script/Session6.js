 const userDetails = {
    name: {
      first: "Kapil",
      last: "Raghuwanshi",
    },
    jobTitle: "JS Instructor @ Crio.do",
    email: {
      work: "kapil@epsilon.com",
      personal: "",
    },
    status: {
      isOnline: true,
      isVerified: false,
    }
  }
  userDetails.name.first="Ankit";
  userDetails.name.last="Bijlwan";
  console.log(userDetails);

// // let arr = [1,23,3,5];

// // let obj = {}

// userDetails.name.first = "Crio";
// userDetails.name.last = "Do";

// userDetails.status.isProMember = false;

//--------------Object Destructuring---------------

let person = {
    name: "Rahul",
    age: 24,
    designation: "Software Engineer"
  }
  
  const name = person.name;
  const age = person.age;
  const designation = person.designation;
  
  // const { age, name } = person;
  
  // const {name: a, age: b} = person;
  
  // console.log(a);
  // console.log(b);
  
  
  // console.log(name);
  // console.log(age);
  // console.log(designation);
  
  // let arr = [];
  // let obj = {};
  
  // console.log(typeof(arr));
  // console.log(typeof(obj));
  
  // console.log(Array.isArray(arr));
  // console.log(Array.isArray(obj));
  
  //------------Array Destructuring--------------------
  
  // const {} = obj;
  // let arr = [1,2,3,4,5];
  
  // const [a,,,b,c] = arr;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  
  //----------------Array of Objects---------------
  
  // var student = [
  
  //       {
  //        name: "Kevin",
  //        rollNumber: 10,
  //        stream: "PCM",
  //         obj: {
  //           prop: "some value"
  //         }
  //       },
  
  //       {
  //         name: "Martin",
  //         rollNumber: 20,
  //         stream: "PCM",
  //         obj: {
  //           prop: "some value"
  //         }
  //       },
  
  //       {
  //          name: "Robert",
  //          rollNumber: 30,
  //          stream: "PCB",
  //         obj: {
  //           prop: "some value"
  //         }
  //       }
  // ]
  
  // console.log(student[0].rollNumber)
  // console.log(student[1].name)
  // console.log(student[2].obj.prop)
  
  //-------------Activity---------------------
  
  // let vehicle = [
  //   {
  //     color: "White",
  //     type: "Hatchback",
  //     capacity: "5 seater"
  //   },
  //   {
  //     color: "Black",
  //     type: "Sedan",
  //     capacity: "5 seater"
  //   },
  //   {
  //     color: "Red",
  //     type: "SUV",
  //     capacity: "7 seater"
  //   }
  // ]
  
  //---------------Activity------------------------
  
  // var student = [
  
  //   {
  //       name: "Kevin",
  //       std_id: 10,
  //       marks: 25
  //   },
  //   {
  //      name: "Austin",
  //      std_id: 20,
  //      marks: 30
  //   },
  //   {
  //       name: "Robin",
  //       std_id: 30,
  //       marks: 20
  //   }
  
  // ];
  
  // let maxMarks = 0;
  // let maxMarksName = "";
  
  // for(let i = 0; i < student.length; i++) {
  //   if(student[i].marks > maxMarks) {
  //     maxMarks = student[i].marks; //30
  //     maxMarksName = student[i].name; //Austin
  //   }
  // }
  
  // console.log(maxMarksName);
  
  // console.log(0.1 + 0.2)
  //Math object
  
  // console.log(5 / 0)
  // console.log(typeof(5 / 0))
  // console.log(-5 / 0)
  
  // console.log(5 / -(0));
  // console.log(-(0 / 5));
  
  // console.log(""===false);
  // console.log("0"==false);
  
  
  
  
  