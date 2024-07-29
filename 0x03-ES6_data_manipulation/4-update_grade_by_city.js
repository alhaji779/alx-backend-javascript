export default function updateStudentGradeByCity(students,city, newGrades) {
    const defGrade = { grade : "N/A"}
    myList = students.filter((student) => student.location === city)
    return myMap = myList.map((student) => ({
        id:student.id,
        firstName:student.firstName,
        location:student.location,
        grade: (newGrades.filter((grad) => grad.studentId === student.id).pop() || defGrade).grade
    } ))
}
