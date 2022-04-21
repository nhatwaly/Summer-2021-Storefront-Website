//Q1 date and time
function datetime_display() {
	var dt = new Date();
	document.getElementById("datetime").innerHTML = dt.toLocaleString();
}
setInterval(datetime_display,1000);

//Q2

let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#lastname")
let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let male = document.querySelector("#male")
let female = document.querySelector("#female")
let comment = document.querySelector("#comment")

function validateForm() {

	if(!firstname.value||!lastname.value||!email.value||!phone.value||!comment.value){
        alert("Please fill in all of the fields above!")
    }

	let letters = /^[A-Za-z]+$/;
	if (!firstname.value.match(letters) || !(lastname.value.match(letters))){
        alert("First name and Last name should be alphabetic only")
    }

	if(firstname.value[0] != firstname.value[0].toUpperCase()){
        alert("First letter of First name should be capital")
    }
    if(lastname.value[0] != lastname.value[0].toUpperCase()){
        alert("First letter of Last name should be capital")
    }

    if(firstname.value == lastname.value){
        alert("First and Last names should be different")
    }

	let phoneFormat = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    if (!phone.value.match(phoneFormat)){
        alert("Phone number should be formated (ddd) ddd-dddd")
    }
	
	if(male.checked||female.checked||other.checked)
	{
		//do nothing
	}
	else{
        alert("Please pick a gender!")
    }

    if(!email.value.includes("@")){
        alert("Email must contain @")
    }

    if(comment.value.length < 10){
        alert("Comment must be at least 10 characters")
    }
	else {
		document.getElementById("form_submit").innerHTML = "Form submitted! We will contact you soon!";
		
		//create JSON object
		let JSObject = {
			"First name": firstname.value,
			"Last name": lastname.value,
			"Email": email.value,
			"Phone": phone.value,
			"Gender": document.querySelector('input[name="gender"]:checked').value,
			"Comment": comment.value,
		};
		
		let JSONObject = JSON.stringify(JSObject);
		console.log(JSONObject);
	}
}

//Q3

var acc = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


//Q4

function changeResumeSize() {
	document.getElementById("paneltag1").style.fontSize='35px';
	document.getElementById("paneltag2").style.fontSize='35px';
	document.getElementById("paneltag3").style.fontSize='35px';
	document.getElementById("paneltag4").style.fontSize='35px';
	document.getElementById("panel1").style.fontSize='35px';
	document.getElementById("panel2").style.fontSize='35px';
	document.getElementById("panel3").style.fontSize='35px';
	document.getElementById("panel4").style.fontSize='35px';
}

function changeWebColor() {
	document.getElementById("mainColumn").style.backgroundColor="Fuchsia";
}

//Q5

var questions =["What is my UTD email address?","Where did I graduate with an Associate in Science Degree?","What color is my car?","What is my favourite sport?","What programming language can I use?"];
var answers = [
["nmp180000@utdallas.edu","phamnhattv@gmail.com","nmp190004@utdallas.edu","nmp18000@utdallas.com"],
["UT Dallas","Collin College","Houston Community College System","University of Houston"],
["Blue","Red","Black","White"],
["Football","Soccer","Swimming","Basketball"],
["C++","Swift","Java","Ruby"]
];
var answerKey =[0,2,3,1,2];
var qCount=0;
var answerAlreadyPicked = false;
var score=0;
var quizFinished = false;
var today = new Date();
var timeStart;
var timeEnd;
var answerShowed = false;

function quizStart() {
	if(quizFinished ==false) {
		timeStart = Date.now();
		qCount =0;
		document.getElementById("quizMain").style.display="block";
		document.getElementById("quizQuestion").innerHTML=questions[qCount];
		document.getElementById("ans1").innerHTML=answers[qCount][0];
		document.getElementById("ans2").innerHTML=answers[qCount][1];
		document.getElementById("ans3").innerHTML=answers[qCount][2];
		document.getElementById("ans4").innerHTML=answers[qCount][3];
	}
	else {
		alert("You already finished the quiz!");
	}
}

function checkAnswer(number) {
	var ansText="ans";
	var ansNum=number.toString();
	let ans = ansText.concat(ansNum);
	var answerPicked = document.getElementById(ans).value;
	if(answerAlreadyPicked==true) {
		//do nothing
	}
	else if(answerPicked == answerKey[qCount]) {
		document.getElementById("questionCheck").innerHTML="Your answer is correct!";
		answerAlreadyPicked = true;
		score++;
	}
	else {
		document.getElementById("questionCheck").innerHTML="Your answer is wrong!";
		answerAlreadyPicked = true;
	}
	qCount++;
	
}

function quizNext() {
	if(qCount<=4){
		answerAlreadyPicked = false;
		document.getElementById("questionCheck").innerHTML="";
		document.getElementById("quizQuestion").innerHTML=questions[qCount];
		document.getElementById("ans1").innerHTML=answers[qCount][0];
		document.getElementById("ans2").innerHTML=answers[qCount][1];
		document.getElementById("ans3").innerHTML=answers[qCount][2];
		document.getElementById("ans4").innerHTML=answers[qCount][3];
	}
	else {
		document.getElementById("quizMain").style.display="none";
		document.getElementById("quizStatus").innerHTML="You finished the quiz!";
		quizFinished =true; 
		showResult();
	}
	
}

function quizSkip() {
	qCount++;
	if(qCount<=4){
		answerAlreadyPicked = false;
		document.getElementById("questionCheck").innerHTML="";
		document.getElementById("quizQuestion").innerHTML=questions[qCount];
		document.getElementById("ans1").innerHTML=answers[qCount][0];
		document.getElementById("ans2").innerHTML=answers[qCount][1];
		document.getElementById("ans3").innerHTML=answers[qCount][2];
		document.getElementById("ans4").innerHTML=answers[qCount][3];
	}
	else {
		
		document.getElementById("quizMain").style.display="none";
		document.getElementById("quizStatus").innerHTML="You finished the quiz!";
		quizFinished =true; 
		showResult();
	}
}

function showResult () {
	timeEnd = Date.now();
	document.getElementById("quizScoreNumber").innerHTML = score.toString();
	var finalTime = timeEnd - timeStart;
	var finalTimeSecond = finalTime/1000;
	document.getElementById("quizTimeNumber").innerHTML = finalTimeSecond.toString();
	document.getElementById("quizResult").style.display="block";
}

function showAnswer() {
	if(answerShowed == false) {
		document.getElementById("quizAnswerPanel").style.display="block";
		answerShowed = true;
	}
	else if(answerShowed == true) {
		document.getElementById("quizAnswerPanel").style.display="none";
		answerShowed = false;
	}
}