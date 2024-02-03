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

function changeQuestion(){
    if (questionNumber.innerHTML < 5){
        prevBtn.style.visibility = "visible"; // Or Display none
        nextBtn.style.visibility = "visible"; // Or Display none
    }
    if (questionNumber.innerHTML == 5){
        nextBtn.style.visibility = "hidden"; // Or Display none
        prevBtn.style.visibility = "visible"; // Or Display none
    }
    if (questionNumber.innerHTML == 1){
        prevBtn.style.visibility = "hidden"; // Or Display none
        nextBtn.style.visibility = "visible"; // Or Display none
    }
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
        case "4":
            getQuestion[0].innerHTML = "Who bullied Spongebob?";
            answer[0].innerHTML = "Flats the Flounder";
            answer[1].innerHTML = "Mr. Krabs";
            answer[2].innerHTML = "Patrick";
            answer[3].innerHTML = "Sandy";
            break;
        case "5":
            getQuestion[0].innerHTML = "Who needs oxygen to breathe?";
            answer[0].innerHTML = "Spongebob";
            answer[1].innerHTML = "Sandy";
            answer[2].innerHTML = "Patrick";
            answer[3].innerHTML = "Squidward";
            break;
    }
}

prevBtn.addEventListener('click', function(){
    questionNumber.innerHTML = parseInt(questionNumber.innerHTML) - 1;
    changeQuestion();
});

nextBtn.addEventListener('click', function(){
    questionNumber.innerHTML = parseInt(questionNumber.innerHTML) + 1;
    changeQuestion();
});