// console.log("Hello");
let questionNumber = document.getElementById('questionNum');
// questionNumber.innerHTML = "5";
let prevBtn = document.getElementById('prevBtn');
let submitBtn = document.getElementById('submitBtn');
let nextBtn = document.getElementById('nextBtn');

let getQuestion = document.getElementsByTagName("legend");
let getResponse1 = document.getElementById('response1');
let getResponse2 = document.getElementById('response2');
let getResponse3 = document.getElementById('response3');
let getResponse4 = document.getElementById('response4');

let answer = document.getElementsByTagName('label');

let trueAnswers = ["The Krabby Patty Secret Formula", "Greedy", "Karen", "Flats the Flounder", "Sandy"];
let userAnswers = ["", "", "", "", ""];

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
        case "1":
            getQuestion[0].innerHTML = "What does Plankton want from the Krusty Krab?";
            answer[0].innerHTML = "Money";
            getResponse1.value = "Money";
            answer[1].innerHTML = "Tartar Sauce";
            getResponse2.value = "Tartar Sauce";
            answer[2].innerHTML = "The Krabby Patty Secret Formula";
            getResponse3.value = "The Krabby Patty Secret Formula";
            answer[3].innerHTML = "A free drink";
            getResponse4.value = "A free drink";
            break;
        case "2":
            getQuestion[0].innerHTML = "What defines Mr.Krabs?";
            answer[0].innerHTML = "Annoying";
            getResponse1.value = "Annoying";
            answer[1].innerHTML = "Greedy";
            getResponse2.value = "Greedy";
            answer[2].innerHTML = "Generous";
            getResponse3.value = "Generous";
            answer[3].innerHTML = "Young";
            getResponse4.value = "Young";
            break;
        case "3":
            getQuestion[0].innerHTML = "What is the name Plankton's Computer Wife?";
            answer[0].innerHTML = "Sandy";
            getResponse1.value = "Sandy";
            answer[1].innerHTML = "Mrs. Puff";
            getResponse2.value = "Mrs. Puff";
            answer[2].innerHTML = "Pearl";
            getResponse3.value = "Pearl";
            answer[3].innerHTML = "Karen";
            getResponse4.value = "Karen";
            break;
        case "4":
            getQuestion[0].innerHTML = "Who bullied SpongeBob at Mrs. Puff's Boating School?";
            answer[0].innerHTML = "Flats the Flounder";
            getResponse1.value = "Flats the Flounder";
            answer[1].innerHTML = "Mr. Krabs";
            getResponse2.value = "Mr. Krabs";
            answer[2].innerHTML = "Patrick";
            getResponse3.value = "Patrick";
            answer[3].innerHTML = "Sandy";
            getResponse4.value = "Sandy";
            break;
        case "5":
            getQuestion[0].innerHTML = "Which character needs oxygen to breathe?";
            answer[0].innerHTML = "SpongeBob";
            getResponse1.value = "SpongeBob";
            answer[1].innerHTML = "Sandy";
            getResponse2.value = "Sandy";
            answer[2].innerHTML = "Patrick";
            getResponse3.value = "Patrick";
            answer[3].innerHTML = "Squidward";
            getResponse4.value = "Squidward";
            break;
    }
}

// TODO: Get user data and clear radio buttons when moving next

let count = 1;

prevBtn.addEventListener('click', function(){
    console.log(count);
    userAnswers[count - 1] = document.querySelector('input[name="mc choices"]:checked').value;
    questionNumber.innerHTML = parseInt(questionNumber.innerHTML) - 1;
    changeQuestion();
    count--;
});

nextBtn.addEventListener('click', function(){
    console.log(count);
    userAnswers[count - 1] = document.querySelector('input[name="mc choices"]:checked').value;
    console.log(userAnswers);
    questionNumber.innerHTML = parseInt(questionNumber.innerHTML) + 1;
    changeQuestion();
    count++;
});

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(count);
    userAnswers[count - 1] = document.querySelector('input[name="mc choices"]:checked').value;
    console.log(userAnswers);
    let hideQNumber = document.getElementById('questionProgress');
    hideQNumber.innerHTML = "Results";
});
