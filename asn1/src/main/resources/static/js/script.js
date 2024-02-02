console.log("Hello");
let questionNumber = document.getElementById('questionNum');
// questionNumber.innerHTML = "5";
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

// console.log(typeof questionNumber.value);
console.log(questionNumber.value);

// TODO: Fix!
if (questionNumber == 1){
    prevBtn.style.display = "none";
}