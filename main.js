// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(firstName , lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
}

function setAge(user, age){
   user.age = age
  return user;
}

function incrementAge(user){
    let newAge = user.age + 1;
    user.age = newAge;
    return user;
}

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}

function addGrades(student, grades){
    let newGrades = student.grades.concat(grades);
    student.grades = newGrades;
    console.table(student)
    return student;
}

function getDataType(obj, key){
return (typeof obj[key]);
}

function addTodo(arr, item){
    let newArr = arr.concat(item);
    console.table(newArr)
    return newArr;
}

function addSong(playlist, song){
    let arrOfSong = playlist.songs.concat(song);
    playlist.songs = arrOfSong;

    let newDuration = 0;

    for(const items of arrOfSong){
        newDuration += items.duration;
        playlist.duration = newDuration;
    }
    console.table(playlist)
    return playlist;
}

function updateReportCard(reportCard, grade){
    ///grade = 62
    let allGradesAdded = 0;//>>308 type number
    
    let newGrades = reportCard.grades;// holds current grades>>[ 70, 96, 80, 62 ]
    let gradeCount = newGrades.push(grade)//adds the new grade >> 4
    //console.log(reportCard.grades)
     
    for(const grade of newGrades){// adds all grades 
        allGradesAdded += grade
    }

    let newAverage = allGradesAdded / gradeCount; //>> 77

    let biggestNum = Math.max(...newGrades);
    let smallestNum = Math.min(...newGrades);

    reportCard.lowestGrade = smallestNum
    reportCard.highestGrade = biggestNum
    reportCard.averageGrade = newAverage
    reportCard.grades = newGrades

 console.table(reportCard)
 return reportCard;
}    









// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
