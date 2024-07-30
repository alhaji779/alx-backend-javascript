export default function getListStudentIds(students) {
  if (students instanceof Array) {
    // Map the students to their IDs and return the result
    return students.map((student) => student.id);
  }
  // If students is not an array, return an empty array
  return [];
}
