const studentDatabase = ["ullas", "nihar", "dhanush", "prashid", "muthu"];

const findStudent = (allStudent, student) => {
  for (let index = 0; index < allStudent.length; index++) {
    let found=false
    if (allStudent[index] === student) {
      console.log(`Student ${student} found at index :${index}`);
      found=true
break
    } 
    if(!found) console.log(`no`) 

  }
};

findStudent(studentDatabase,"ullas")
findStudent(studentDatabase,"nihar")
findStudent(studentDatabase,"abhi")


