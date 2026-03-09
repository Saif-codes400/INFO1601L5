//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];
function getAverageGrade(student, course)  {
    let count = 0;
    let sum = 0;
    let found = false;
    for (let trans of student.transcript) {
      if (trans.course === course) {
        found = true;
        for (let grade of trans.grades) {
          sum += grade;
          count = count + 1;
        }

        
      }
    }

    if (found === false) {
      console.log(This student did not do ${course});
    }
    
    return sum/count;
}

console.log(getAverageGrade(sally, 'INFO 1600'));


// 2nd function to make

function getAssignmentMark(student, course, num) {

    for (let trans of student.transcript) {
      if (trans.course === course) {
        for (let i = 0; i < trans.grades.length; i++) {
          if ((i) === num) {
            return trans.grades[i - 1]; // the reason for returning 1 below the index is because when the user is looking for marks he/she won't start from 0
          }
        }
      }
    }

    return -1;
}

console.log(getAssignmentMark(bob,"INFO 1600",1));


function averageAssessment(students, courseName, assignment) {
  let count = 0;
  let sum = 0;
  for (let student of students) {
    for (let trans of student.transcript) {
      if (trans.course === courseName) {
        sum += trans.grades[assignment];
        count++;
      }
    }
  }

  return sum/count;
}

console.log(averageAssessment(students, 'INFO 1601', 1));
