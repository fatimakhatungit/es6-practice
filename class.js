class Student{
constructor (sId, sName){
    this.id = sId;
    this.name = sName;
    this.school = "kolimunnesa school";
}
}

const Student1 = new Student(12, "shuvo");
const Student2 = new Student(12, "mahiya");
console.log(Student1, Student2);