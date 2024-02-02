console.log("Hello");
let questionNumber = document.getElementById('questionNum');
// questionNumber.innerHTML = "5";
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

// console.log(typeof questionNumber.value);
console.log(questionNumber.innerHTML);

if (questionNumber.innerHTML == 1){
    prevBtn.style.visibility = "hidden"; // Or Display none
}