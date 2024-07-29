export default function getListStudentIds(n) {
  if (!Array.isArray(n)) {
    return [];
  }
  else {
    return n.map(x => x.id)
  }
};
