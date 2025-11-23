let students = []; // Empty Array

// Add Student
function addStudent(name, mark) {
    students.push({name: name, mark: mark});
}

// Display Student
function showStudents() {
    console.log("\nStudent List:");
    students.forEach((s, i) => {
        console.log(`${i + 1}. ${s.name} - ${s.mark}`);
    });
}

// Get highest mark
function getHighest() {
    let highest = Math.max(...students.map(s => s.mark));
    console.log("\nHighest Mark:", highest);
}

// Get Lowest Mark
function getLowest() {
    let lowest = Math.min(...students.map(s => s.mark));
    console.log("Lowest Mark: ", lowest);
}

// Get Average Mark
function getAverage() {
    let total = students.reduce((sum, s) => sum + s.mark, 0);
    let avg = (total / students.length).toFixed();
    console.log("Average Marks:", avg);
}

// Show Passed
function showPassed() {
    let passed = students.filter(s => s.mark >= 60);

    console.log("\nPassed Students:");
    passed.forEach(s => {
        console.log(`${s.name} - ${s.mark}`);
    });
}

// Show Failed
function showFailed() {
    let failed = students.filter(s => s.mark <= 60);

    console.log("\nFailed Students: ");
    failed.forEach(s => {
        console.log(`${s.name} - ${s.mark}`);
    });
}

// Sort Students Highest to Lowest
function sortHighestToLowest() {
  students.sort((a, b) => b.mark - a.mark);

  console.log("\nSorted: Highest to Lowest");
  students.forEach(s => {
    console.log(`${s.name} - ${s.mark}`);
  });
}

// Topper Student
function topStudent() {
    let h = Math.max(...students.map(s => s.mark));
    let topper = students.find(s => s.mark === h);
    console.log(`\nTopper Student: ${topper.name} - ${topper.mark}`);
}

// Delete Student
function deleteStudent(name) {
    let index = students.findIndex(s => s.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`Deleted: ${name}`);
    } else {
        console.log("Student not found");
    }
}

// Testing
addStudent("Arun", 80);
addStudent("Rahul", 72);
addStudent("Kiran", 95);
addStudent("Akhil", 60);
addStudent("Chris", 79);

// Delete
deleteStudent("Kiran");

// Display
showStudents();
// getHighest();
// getLowest();
// getAverage();
// showPassed();
// showFailed();
// sortHighestToLowest();
// topStudent();