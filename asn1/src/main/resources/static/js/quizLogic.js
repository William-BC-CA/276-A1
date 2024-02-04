let questionNumber = document.getElementById('questionNum');
let prevBtn = document.getElementById('prevBtn');
let submitBtn = document.getElementById('submitBtn');
let nextBtn = document.getElementById('nextBtn');

let getQuestion = document.getElementsByTagName("legend");
let getResponse1 = document.getElementById('response1');
let getResponse2 = document.getElementById('response2');
let getResponse3 = document.getElementById('response3');
let getResponse4 = document.getElementById('response4');

let answer = document.getElementsByTagName('label');

let getWrapper = document.getElementsByClassName('wrapper');

let trueAnswers = ["The Krabby Patty Secret Formula", "Greedy", "Karen", "Flats the Flounder", "Sandy"];
let userAnswers = ["", "", "", "", ""];

let wholeForm = document.getElementById("questionMenu");

if (questionNumber.innerHTML == 1){
    prevBtn.style.visibility = "hidden"; // Or Display none
}

nextBtn.style.display = "none"; // Or Display none

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
            getQuestion[0].innerHTML = "What is the name of Plankton's Computer Wife?";
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
            getQuestion[0].innerHTML = "Which character cannot breathe underwater?";
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

prevBtn.addEventListener('click', function(){
    questionNumber.innerHTML = parseInt(questionNumber.innerHTML) - 1;
    qCount = parseInt(questionNumber.innerHTML) - 1;
    if (userAnswers[qCount] == ""){
        nextBtn.style.display = "none";
    }
    else {
        nextBtn.style.display = "block";
    }
    changeQuestion();
    if (userAnswers[qCount] == ""){
        getResponse1.checked = false;
        getResponse2.checked = false;
        getResponse3.checked = false;
        getResponse4.checked = false;
    }
    else if (userAnswers[qCount] == getResponse1.value){
        getResponse1.checked = true;
    }
    else if (userAnswers[qCount] == getResponse2.value){
        getResponse2.checked = true;
    }
    else if (userAnswers[qCount] == getResponse3.value){
        getResponse3.checked = true;
    }
    else if (userAnswers[qCount] == getResponse4.value){
        getResponse4.checked = true;
    }
});

nextBtn.addEventListener('click', function(){
    questionNumber.innerHTML = parseInt(questionNumber.innerHTML) + 1;
    qCount = parseInt(questionNumber.innerHTML) - 1;
    if (userAnswers[qCount] == ""){
        nextBtn.style.display = "none";
    }
    else {
        nextBtn.style.display = "block";
    }
    changeQuestion();
    if (userAnswers[qCount] == ""){
        getResponse1.checked = false;
        getResponse2.checked = false;
        getResponse3.checked = false;
        getResponse4.checked = false;
    }
    else if (userAnswers[qCount] == getResponse1.value){
        getResponse1.checked = true;
    }
    else if (userAnswers[qCount] == getResponse2.value){
        getResponse2.checked = true;
    }
    else if (userAnswers[qCount] == getResponse3.value){
        getResponse3.checked = true;
    }
    else if (userAnswers[qCount] == getResponse4.value){
        getResponse4.checked = true;
    }
});

getResponse1.addEventListener('click', function(){
    userAnswers[parseInt(questionNumber.innerHTML) - 1] = getResponse1.value;
    nextBtn.style.display = "block";
});

getResponse2.addEventListener('click', function(){
    userAnswers[parseInt(questionNumber.innerHTML) - 1] = getResponse2.value;
    nextBtn.style.display = "block";
});

getResponse3.addEventListener('click', function(){
    userAnswers[parseInt(questionNumber.innerHTML) - 1] = getResponse3.value;
    nextBtn.style.display = "block";
});

getResponse4.addEventListener('click', function(e){
    userAnswers[parseInt(questionNumber.innerHTML) - 1] = getResponse4.value;
    nextBtn.style.display = "block";
});

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log(userAnswers);
    console.log(trueAnswers);
    let result = 0;
    getWrapper[0].style.transform = "translateY(0%)";
    let hideQNumber = document.getElementById('questionProgress');
    document.getElementById('descript').remove();
    prevBtn.remove();
    nextBtn.remove();
    submitBtn.remove();
    document.getElementById('theQuestions').remove();

    let info = document.createElement("p");
    info.innerHTML = "Red is an incorrect response. Green is the correct response. Blue is the correct response when no response is given.";
    info.style.fontFamily = "Concert One";

    let f1 = document.createElement("fieldset");
    let q1 = document.createElement("legend");
    q1.innerHTML = "What does Plankton want from the Krusty Krab?";
    let res1 = document.createElement("input");
    res1.setAttribute("type", "radio");
    res1.setAttribute("value", "Money");
    res1.setAttribute("disabled", "true");
    let label1 = document.createElement("label");
    label1.innerHTML = "Money";
    let res2 = document.createElement("input");
    res2.setAttribute("type", "radio");
    res2.setAttribute("value", "Tartar Sauce");
    res2.setAttribute("disabled", "true");
    let label2 = document.createElement("label");
    label2.innerHTML = "Tartar Sauce";
    let res3 = document.createElement("input");
    res3.setAttribute("type", "radio");
    res3.setAttribute("value", "The Krabby Patty Secret Formula");
    res3.setAttribute("disabled", "true");
    let label3 = document.createElement("label");
    label3.innerHTML = "The Krabby Patty Secret Formula";
    let res4 = document.createElement("input");
    res4.setAttribute("type", "radio");
    res4.setAttribute("value", "A free drink");
    res4.setAttribute("disabled", "true");
    let label4 = document.createElement("label");
    label4.innerHTML = "A free drink";

    if (userAnswers[0] == res1.value){
        res1.checked = true;
        label1.style.setProperty("background-color", "red");
        label3.classList.add("correct-response-input");
        label3.style.setProperty("background-color", "green");
        res2.checked = false;
        res3.checked = true;
        res4.checked = false;
    }
    else if (userAnswers[0] == res2.value){
        res2.checked = true;
        label2.style.setProperty("background-color", "red");
        label3.classList.add("correct-response-input");
        label3.style.setProperty("background-color", "green");
        res1.checked = false;
        res4.checked = false;
        res3.checked = true;
    }
    else if (userAnswers[0] == res3.value){
        res3.checked = true;
        label3.classList.add("correct-response-input");
        label3.style.setProperty("background-color", "green");
        res1.checked = false;
        res2.checked = false;
        res4.checked = false;
        ++result;
    }
    else if (userAnswers[0] == res4.value){
        res4.checked = true;
        label4.style.setProperty("background-color", "red");
        label3.classList.add("correct-response-input");
        label3.style.setProperty("background-color", "green");
        res1.checked = false;
        res2.checked = false;
        res3.checked = true;
    }
    else{
        label3.classList.add("correct-response-input");
        label3.style.setProperty("background-color", "rgb(0, 123, 183)");
        res1.checked = false;
        res2.checked = false;
        res3.checked = true;
        res4.checked = false;
    }

    f1.append(q1, res1, label1, res2, label2, res3, label3, res4, label4);
    wholeForm.append(info, f1);

    let f2 = document.createElement("fieldset");
    let q2 = document.createElement("legend");
    q2.innerHTML = "What defines Mr.Krabs?";
    let r1 = document.createElement("input");
    r1.setAttribute("type", "radio");
    r1.setAttribute("value", "Annoying");
    r1.setAttribute("disabled", "true");
    let a1 = document.createElement("label");
    a1.innerHTML = "Annoying";
    let r2 = document.createElement("input");
    r2.setAttribute("type", "radio");
    r2.setAttribute("value", "Greedy");
    r2.setAttribute("disabled", "true");
    let a2 = document.createElement("label");
    a2.innerHTML = "Greedy";
    let r3 = document.createElement("input");
    r3.setAttribute("type", "radio");
    r3.setAttribute("value", "Generous");
    r3.setAttribute("disabled", "true");
    let a3 = document.createElement("label");
    a3.innerHTML = "Generous";
    let r4 = document.createElement("input");
    r4.setAttribute("type", "radio");
    r4.setAttribute("value", "Young");
    r4.setAttribute("disabled", "true");
    let a4 = document.createElement("label");
    a4.innerHTML = "Young";

    if (userAnswers[1] == r1.value){
        r1.checked = true;
        a1.style.setProperty("background-color", "red");
        a2.style.setProperty("background-color", "green");
        a2.classList.add("correct-response-input");
        r3.checked = false;
        r4.checked = false;
        r2.checked = true;
    }
    else if (userAnswers[1] == r2.value){
        r2.checked = true;
        a2.style.setProperty("background-color", "green");
        a2.classList.add("correct-response-input");
        r1.checked = false;
        r3.checked = false;
        r4.checked = false;
        ++result;
    }
    else if (userAnswers[1] == r3.value){
        r3.checked = true;
        a3.style.setProperty("background-color", "red");
        a2.style.setProperty("background-color", "green");
        a2.classList.add("correct-response-input");
        r1.checked = false;
        r4.checked = false;
        r2.checked = true;
    }
    else if (userAnswers[1] == r4.value){
        r4.checked = true;
        a4.style.setProperty("background-color", "red");
        a2.style.setProperty("background-color", "green");
        a2.classList.add("correct-response-input");
        r1.checked = false;
        r3.checked = false;
        r2.checked = true;
    }
    else {
        a2.style.setProperty("background-color", "rgb(0, 123, 183)");
        a2.classList.add("correct-response-input");
        r1.checked = false;
        r3.checked = false;
        r4.checked = false;
        r2.checked = true;
    }

    // ! Don't use documentfragment or append. Use this: https://dev.to/dcodeyt/how-to-append-multiple-elements-at-once-in-javascript-dom-39eg

    f2.append(q2, r1, a1, r2, a2, r3, a3, r4, a4);
    wholeForm.append(f2);

    let f3 = document.createElement("fieldset");
    let q3 = document.createElement("legend");
    q3.innerHTML = "What is the name of Plankton's Computer Wife?";
    let r5 = document.createElement("input");
    r5.setAttribute("type", "radio");
    r5.setAttribute("value", "Sandy");
    r5.setAttribute("disabled", "true");
    let a5 = document.createElement("label");
    a5.innerHTML = "Sandy";
    let r6 = document.createElement("input");
    r6.setAttribute("type", "radio");
    r6.setAttribute("value", "Mrs. Puff");
    r6.setAttribute("disabled", "true");
    let a6 = document.createElement("label");
    a6.innerHTML = "Mrs. Puff";
    let r7 = document.createElement("input");
    r7.setAttribute("type", "radio");
    r7.setAttribute("value", "Pearl");
    r7.setAttribute("disabled", "true");
    let a7 = document.createElement("label");
    a7.innerHTML = "Pearl";
    let r8 = document.createElement("input");
    r8.setAttribute("type", "radio");
    r8.setAttribute("value", "Karen");
    r8.setAttribute("disabled", "true");
    let a8 = document.createElement("label");
    a8.innerHTML = "Karen";

    if (userAnswers[2] == r5.value){
        r5.checked = true;
        a5.style.setProperty("background-color", "red");
        a8.style.setProperty("background-color", "green");
        a8.classList.add("correct-response-input");
        r6.checked = false;
        r7.checked = false;
        r8.checked = true;
    }
    else if (userAnswers[2] == r6.value){
        r6.checked = true;
        a6.style.setProperty("background-color", "red");
        a8.style.setProperty("background-color", "green");
        a8.classList.add("correct-response-input");
        r5.checked = false;
        r7.checked = false;
        r8.checked = true;
    }
    else if (userAnswers[2] == r7.value){
        r7.checked = true;
        a7.style.setProperty("background-color", "red");
        a8.style.setProperty("background-color", "green");
        a8.classList.add("correct-response-input");
        r5.checked = false;
        r6.checked = false;
        r8.checked = true;
    }
    else if (userAnswers[2] == r8.value){
        r8.checked = true;
        a8.style.setProperty("background-color", "green");
        a8.classList.add("correct-response-input");
        r5.checked = false;
        r6.checked = false;
        r7.checked = false;
        ++result;
    }
    else {
        a8.style.setProperty("background-color", "rgb(0, 123, 183)");
        a8.classList.add("correct-response-input");
        r5.checked = false;
        r6.checked = false;
        r7.checked = false;
        r8.checked = true;
    }

    f3.append(q3, r5, a5, r6, a6, r7, a7, r8, a8);
    wholeForm.append(f3);

    let f4 = document.createElement("fieldset");
    let q4 = document.createElement("legend");
    q4.innerHTML = "Who bullied SpongeBob at Mrs. Puff's Boating School?";
    let r9 = document.createElement("input");
    r9.setAttribute("type", "radio");
    r9.setAttribute("value", "Flats the Flounder");
    r9.setAttribute("disabled", "true");
    let a9 = document.createElement("label");
    a9.innerHTML = "Flats the Flounder";
    let r10 = document.createElement("input");
    r10.setAttribute("type", "radio");
    r10.setAttribute("value", "Mr. Krabs");
    r10.setAttribute("disabled", "true");
    let a10 = document.createElement("label");
    a10.innerHTML = "Mr. Krabs";
    let r11 = document.createElement("input");
    r11.setAttribute("type", "radio");
    r11.setAttribute("value", "Patrick");
    r11.setAttribute("disabled", "true");
    let a11 = document.createElement("label");
    a11.innerHTML = "Patrick";
    let r12 = document.createElement("input");
    r12.setAttribute("type", "radio");
    r12.setAttribute("value", "Sandy");
    r12.setAttribute("disabled", "true");
    let a12 = document.createElement("label");
    a12.innerHTML = "Sandy";

    if (userAnswers[3] == r9.value){
        r9.checked = true;
        a9.style.setProperty("background-color", "green");
        a9.classList.add("correct-response-input");
        r10.checked = false;
        r11.checked = false;
        r12.checked = false;
        ++result;
    }
    else if (userAnswers[3] == r10.value){
        r10.checked = true;
        a10.style.setProperty("background-color", "red");
        a9.style.setProperty("background-color", "green");
        a9.classList.add("correct-response-input");
        r11.checked = false;
        r12.checked = false;
        r9.checked = true;
    }
    else if (userAnswers[3] == r11.value){
        r11.checked = true;
        a11.style.setProperty("background-color", "red");
        a9.style.setProperty("background-color", "green");
        a9.classList.add("correct-response-input");
        r12.checked = false;
        r10.checked = false;
        r9.checked = true;
    }
    else if (userAnswers[3] == r12.value){
        r12.checked = true;
        a12.style.setProperty("background-color", "red");
        a9.style.setProperty("background-color", "green");
        a9.classList.add("correct-response-input");
        r11.checked = false;
        r10.checked = false;
        r9.checked = true;
    }
    else {
        a9.style.setProperty("background-color", "rgb(0, 123, 183)");
        a9.classList.add("correct-response-input");
        r10.checked = false;
        r11.checked = false;
        r12.checked = false;
        r9.checked = true;
    }

    f4.append(q4, r9, a9, r10, a10, r11, a11, r12, a12);
    wholeForm.append(f4);

    let f5 = document.createElement("fieldset");
    let q5 = document.createElement("legend");
    q5.innerHTML = "Which character cannot breathe underwater?";
    let r13 = document.createElement("input");
    r13.setAttribute("type", "radio");
    r13.setAttribute("value", "SpongeBob");
    r13.setAttribute("disabled", "true");
    let a13 = document.createElement("label");
    a13.innerHTML = "SpongeBob";
    let r14 = document.createElement("input");
    r14.setAttribute("type", "radio");
    r14.setAttribute("value", "Sandy");
    r14.setAttribute("disabled", "true");
    let a14 = document.createElement("label");
    a14.innerHTML = "Sandy";
    let r15 = document.createElement("input");
    r15.setAttribute("type", "radio");
    r15.setAttribute("value", "Patrick");
    r15.setAttribute("disabled", "true");
    let a15 = document.createElement("label");
    a15.innerHTML = "Patrick";
    let r16 = document.createElement("input");
    r16.setAttribute("type", "radio");
    r16.setAttribute("value", "Squidward");
    r16.setAttribute("disabled", "true");
    let a16 = document.createElement("label");
    a16.innerHTML = "Squidward";

    if (userAnswers[4] == r13.value){
        r13.checked = true;
        a13.style.setProperty("background-color", "red");
        a14.style.setProperty("background-color", "green");
        a14.classList.add("correct-response-input");
        r15.checked = false;
        r16.checked = false;
        r14.checked = true;
    }
    else if (userAnswers[4] == r14.value){
        r14.checked = true;
        a14.style.setProperty("background-color", "green");
        a14.classList.add("correct-response-input");
        r13.checked = false;
        r15.checked = false;
        r16.checked = false;
        ++result;
    }
    else if (userAnswers[4] == r15.value){
        r15.checked = true;
        a15.style.setProperty("background-color", "red");
        a14.style.setProperty("background-color", "green");
        a14.classList.add("correct-response-input");
        r13.checked = false;
        r16.checked = false;
        r14.checked = true;
    }
    else if (userAnswers[4] == r16.value){
        r16.checked = true;
        a16.style.setProperty("background-color", "red");
        a14.style.setProperty("background-color", "green");
        a14.classList.add("correct-response-input");
        r13.checked = false;
        r15.checked = false;
        r14.checked = true;
    }
    else {
        a14.style.setProperty("background-color", "rgb(0, 123, 183)");
        a14.classList.add("correct-response-input");
        r13.checked = false;
        r15.checked = false;
        r16.checked = false;
        r14.checked = true;
    }

    f5.append(q5, r13, a13, r14, a14, r15, a15, r16, a16);
    wholeForm.append(f5);

    hideQNumber.innerHTML = "Results: " + result + "/5";
});
