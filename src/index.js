import studentModule from "./module/student";
import personFactory from "./factory/person";

document.addEventListener("DOMContentLoaded", () => {
    const students = studentModule();
    students.addStudent(personFactory("Tom", 8));
    students.addStudent(personFactory("Mary", 9));

    document.getElementById("content").innerHTML = 
    "<div>" + students.getStudentList().map(student => student.getName()).join(", ") + "</div>";
})