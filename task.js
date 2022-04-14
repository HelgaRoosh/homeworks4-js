"use strict"
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;    
}

let student5 = new Student("Vasyan", "male", 25);
let student4 = new Student("Anna", "female", 24);
let student3 = new Student("Sanchos", "male", 22);
let student2 = new Student("Buzz", "female", 35);
let student1 = new Student("Tony", "male", 37);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){ 
      this.marks = [];
    }
      this.marks.push(mark);
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = []; 
    } 
    mark.forEach((item, idx, mark) => this.marks.push(mark[idx]));   
}

Student.prototype.getAverage = function () { 
  let sum = 0;
  let marks = this.marks;
  marks.forEach((item, idx, marks) => sum += item);
  return sum / marks.length;
}

Student.prototype.exclude = function (reason) { 
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
