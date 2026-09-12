const studentList = document.getElementById("studentList");
const student = [
    "Anna", //0
    "Bryan", //1
    "Catterine", //2
    "Delan", //3
];
const students = [
    { name: "Anna", goal: "Go to working abroad", level: "Beginner", face: "student-anna.png", },
    { name: "Bryan", goal: "Success own business", level: "Average", face: "student-bryan.png", },
    { name: "Catterine", goal: "Being Professional Developer", level: "Intermediate", face: "student-catterine.png", },
    { name: "Delan", goal: "Building Business", level: "Professional", face: "student-delan.png", },
];


students.forEach(function (student) {
     console.log(`student name is ${student}`);
     // สร้างกล่อง <article></article> ขึ้นมา
     const studentCard = document.createElement("article");

     // ใส่คลาส <article class ="student-card"></article>
     studentCard.classList.add("student-card");
     // studentCard.classList.add("student-card-extra");

     // ใส่ h2 ใน article
     // <article class ="student-card">
     //     <h2>student Anna</h2>
     // </article>

     studentCard.innerHTML = `
        <img class="card-face" src="${student.face}" alt="" aria-hidden="true">
        <div class="card-header">
            <div class="avatar">
                <img src="${student.face}" alt="${student.name}">
            </div>
            <div>
                <h2>${student.name}</h2>
                <p class="level-line">${student.level}</p>
            </div>
        </div>
        <p class="goal"><strong>เป้าหมาย</strong>${student.goal}</p>
        <span class="badge">Bootcamp Student</span>
        `;
     // ใส่ <article></article> ใน studentList <div id="studentList" class="student-list">
     studentList.appendChild(studentCard);
});