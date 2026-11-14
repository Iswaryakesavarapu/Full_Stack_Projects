const students = [
  { id: 1, name: "Ramya", age: 19 },
  { id: 2, name: "Aishu", age: 20 },
  { id: 3, name: "Shri", age: 18 },
];
const newStudent = { id: 4, name: "Kathy", age: 17 };
students.push(newStudent);
console.log("All students:", students);
const studentReadID = 2;
const student = students.find((stu) => stu.id == studentReadID);
if (student) {
  console.log(`Student with id ${studentReadID}:`, student);
} else {
  console.log("Student with id ${studentReadID} not found");
}

const updateId = 3;
const updateData = { id: 3, name: "Kavya", age: 21 };
const updateIndex = students.findIndex((stu) => stu.id === updateId);
if (updateIndex != -1) {
  students[updateIndex] = { ...students[updateIndex], ...updateData };
  console.log("student update: ", updateData);
} else {
  console.log("Student with id ${updatedId} not found");
}

const deleteId = 1;
const deleteIndex = students.findIndex((stu) => stu.id === deleteId);
if (deleteIndex != -1) {
  const deleteStudent = students.splice(deleteIndex, 1);
  console.log("Student deleted:", deleteStudent[0]);
} else {
  console.log("Student with id ${deleteId} not found");
}
console.log("Student after CRUD:", students);
