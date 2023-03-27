const updateStudentGradeByCity = (students, city, newGrades) => {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  const studentsByCity = students.filter((student) => student.location === city).map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    return { ...student, grade: grade ? grade.grade : 'N/A' };
  });

  return studentsByCity;
};

export default updateStudentGradeByCity;
