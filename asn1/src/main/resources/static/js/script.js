// console.log("Hello");
let questionNumber = document.getElementById('questionNum');
// questionNumber.innerHTML = "5";
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

let getEntireForm = document.getElementById('questionMenu');
let getQuestion = document.getElementsByTagName("legend");

let answer = document.getElementsByTagName('label');

// console.log(typeof questionNumber.value);
// console.log(questionNumber.innerHTML);

if (questionNumber.innerHTML == 1){
    prevBtn.style.visibility = "hidden"; // Or Display none
}
else if (questionNumber.innerHTML == 5){
    nextBtn.style.visibility = "hidden"; // Or Display none
}

// TODO: Create action
nextBtn.addEventListener('click', function(){
    questionNumber.innerHTML = parseInt(questionNumber.innerHTML) + 1;
    switch(questionNumber.innerHTML){
        case "2":
            getQuestion[0].innerHTML = "What defines Mr.Krabs?";
            answer[0].innerHTML = "Annoying";
            answer[1].innerHTML = "Greedy";
            answer[2].innerHTML = "Generous";
            answer[3].innerHTML = "Young";
            break;
        case "3":
            getQuestion[0].innerHTML = "What is the name Plankton's Computer Wife?";
            answer[0].innerHTML = "Sandy";
            answer[1].innerHTML = "Mrs. Puff";
            answer[2].innerHTML = "Pearl";
            answer[3].innerHTML = "Karen";
            break;

    }
});