const studentModule = () => {
    let studentList = [];
    const getStudentList = () => studentList;
    const addStudent = (student) => {
        studentList.push(student);
    }
    return { getStudentList, addStudent };
}

export default studentModule;