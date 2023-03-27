const getListStudentIds = (array) => {
  if (Array.isArray(array)) {
    return array.map((student) => student.id);
  }
  return [];
};

export default getListStudentIds;
