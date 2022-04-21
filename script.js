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


//Assignment 4


//variables for prices
	var priceBook = new Array(12);
	var bookChecked = new Array(12);

//Q1


$(document).ready(function() {
	
	console.log('JQuery loaded');
	
    var bookImg1 = new Image(400,600);
	bookImg1.src='TemocBook1.png';
    $('#bookImg1').append(bookImg1);
	
	var bookImg2 = new Image(400,600);
	bookImg2.src='TemocBook2.png';
    $('#bookImg2').append(bookImg2);
	
	var bookImg3 = new Image(400,600);
	bookImg3.src='TemocBook3.png';
    $('#bookImg3').append(bookImg3);
	
	var bookImg4 = new Image(400,600);
	bookImg4.src='TemocBook4.png';
    $('#bookImg4').append(bookImg4);
	
	var bookImg5 = new Image(400,600);
	bookImg5.src='TemocBook5.png';
    $('#bookImg5').append(bookImg5);
	
	var bookImg6 = new Image(400,600);
	bookImg6.src='TemocBook6.png';
    $('#bookImg6').append(bookImg6);
	
	var bookImg7 = new Image(400,600);
	bookImg7.src='TemocBook7.png';
    $('#bookImg7').append(bookImg7);
	
	var bookImg8 = new Image(400,600);
	bookImg8.src='TemocBook8.png';
    $('#bookImg8').append(bookImg8);
	
	var bookImg9 = new Image(400,600);
	bookImg9.src='TemocBook9.png';
    $('#bookImg9').append(bookImg9);
	
	var bookImg10 = new Image(400,600);
	bookImg10.src='TemocBook10.png';
    $('#bookImg10').append(bookImg10);
	
	var bookImg11 = new Image(400,600);
	bookImg11.src='TemocBook11.png';
    $('#bookImg11').append(bookImg11);
	
	var bookImg12 = new Image(400,600);
	bookImg12.src='TemocBook12.png';
    $('#bookImg12').append(bookImg12);
	
	
	
	
	//Q2
		//book1
		var txt = "";
		var txtCart ="Book #1 <br>";
		var bookText1 = "<Book>"+
		"<Title>How to survive in UT Dallas</Title>"+
		"<Author>Enarc Temoc</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2020</Year>"+
		"<Price>$19.99</Price>"+
		"</Book >";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText1,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText1").innerHTML = txt;
		document.getElementById("bookPanel1").innerHTML = txtCart;
		
		//book2
		var txt = "";
		var txtCart ="Book #2 <br>";
		var bookText2 = "<Book>"+
		"<Title>How to survive in UT Dallas 2</Title>"+
		"<Author>Enarc Temoc</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2020</Year>"+
		"<Price>$19.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText2,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText2").innerHTML = txt;
		document.getElementById("bookPanel2").innerHTML = txtCart;
		
		//book3
		var txt = "";
		var txtCart ="Book #3 <br>";
		var bookText3 = "<Book>"+
		"<Title>How to survive in UT Dallas 3</Title>"+
		"<Author>Enarc Temoc</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2020</Year>"+
		"<Price>$19.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText3,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText3").innerHTML = txt;
		document.getElementById("bookPanel3").innerHTML = txtCart;
		
		//book4
		var txt = "";
		var txtCart ="Book #4 <br>";
		var bookText4 = "<Book>"+
		"<Title>How to survive in UT Dallas 4</Title>"+
		"<Author>Enarc Temoc</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2020</Year>"+
		"<Price>$19.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText4,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText4").innerHTML = txt;
		document.getElementById("bookPanel4").innerHTML = txtCart;
		
		//book5
		var txt = "";
		var txtCart ="Book #5 <br>";
		var bookText5 = "<Book>"+
		"<Title>How to survive in UT Dallas 5</Title>"+
		"<Author>Enarc Temoc</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2020</Year>"+
		"<Price>$19.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText5,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText5").innerHTML = txt;
		document.getElementById("bookPanel5").innerHTML = txtCart;
		
		//book6
		var txt = "";
		var txtCart ="Book #6 <br>";
		var bookText6 = "<Book>"+
		"<Title>How to survive in UT Dallas 6</Title>"+
		"<Author>Enarc Temoc</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2020</Year>"+
		"<Price>$19.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText6,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText6").innerHTML = txt;
		document.getElementById("bookPanel6").innerHTML = txtCart;
		
		//book7
		var txt = "";
		var txtCart ="Book #7 <br>";
		var bookText7 = "<Book>"+
		"<Title>UT Dallas Places And Activities Student Union</Title>"+
		"<Author>Crane Comet</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2021</Year>"+
		"<Price>$9.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText7,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText7").innerHTML = txt;
		document.getElementById("bookPanel7").innerHTML = txtCart;
		
		//book8
		var txt = "";
		var txtCart ="Book #8 <br>";
		var bookText8 = "<Book>"+
		"<Title>UT Dallas Places And Activities McDermott Library</Title>"+
		"<Author>Crane Comet</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2021</Year>"+
		"<Price>$9.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText8,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText8").innerHTML = txt;
		document.getElementById("bookPanel8").innerHTML = txtCart;
		
		//book9
		var txt = "";
		var txtCart ="Book #9 <br>";
		var bookText9 = "<Book>"+
		"<Title>UT Dallas Places And Activities Sport Complex</Title>"+
		"<Author>Crane Comet</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2021</Year>"+
		"<Price>$9.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText9,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText9").innerHTML = txt;
		document.getElementById("bookPanel9").innerHTML = txtCart;
		
		//book10
		var txt = "";
		var txtCart ="Book #10 <br>";
		var bookText10 = "<Book>"+
		"<Title>UT Dallas Places And Activities Theatre</Title>"+
		"<Author>Crane Comet</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2021</Year>"+
		"<Price>$9.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText10,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText10").innerHTML = txt;
		document.getElementById("bookPanel10").innerHTML = txtCart;
		
		//book11
		var txt = "";
		var txtCart ="Book #11 <br>";
		var bookText11 = "<Book>"+
		"<Title>UT Dallas Places And Activities Visual Arts Studio</Title>"+
		"<Author>Crane Comet</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2021</Year>"+
		"<Price>$9.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText11,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText11").innerHTML = txt;
		document.getElementById("bookPanel11").innerHTML = txtCart;
		
		//book12
		var txt = "";
		var txtCart ="Book #12 <br>";
		var bookText12 = "<Book>"+
		"<Title>UT Dallas Places And Activities Green Center</Title>"+
		"<Author>Crane Comet</Author>"+
		"<Edition>1st</Edition>"+
		"<Year>2021</Year>"+
		"<Price>$9.99</Price>"+
		"</Book>";
		parser = new DOMParser();
		xmlDoc = parser.parseFromString(bookText12,"text/xml");
		x = xmlDoc.documentElement.childNodes;
		for (i = 0; i < x.length ;i++) {
			if(i!==2) {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
				txtCart += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
			else {
				txt += x[i].nodeName + ": " + x[i].childNodes[0].nodeValue + "<br>";
			}
		}
		document.getElementById("bookText12").innerHTML = txt;
		document.getElementById("bookPanel12").innerHTML = txtCart;
		
		//Q3
		
		/*
		$("#bookButton2").click(function(){
			$("#book2").fadeToggle(2000);
		});
		*/
		
		//Q4
		var totalPrice =0;
		priceBook = [19.99,19.99,19.99,19.99,19.99,19.99,9.99,9.99,9.99,9.99,9.99,9.99];
		bookChecked =[0,0,0,0,0,0,0,0,0,0,0,0];
		
		$("#myCart").click(function(){
			$("#myCartPanel").fadeToggle(1000);
		});
		
		$('input[id="bookButton1"]').click(function(){
            if($("#bookButton1").prop("checked") == true){
                console.log("Checkbox is checked.");
				bookChecked[0] = 1;
				$("#bookPanel1").fadeIn("fast");
				$("#book1").fadeTo("slow",0.5);
            }
            if($("#bookButton1").prop("checked") == false){
                console.log("Checkbox is unchecked.");
				bookChecked[0] = 0;
				$("#bookPanel1").fadeOut("fast");
				$("#book1").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton2"]').click(function(){
            if($("#bookButton2").prop("checked") == true){
                console.log("Checkbox 2 is checked.");
				bookChecked[1] = 1;
				$("#bookPanel2").fadeIn("fast");
				$("#book2").fadeTo("slow",0.5);
            }
            if($("#bookButton2").prop("checked") == false){
                console.log("Checkbox 2 is unchecked.");
				bookChecked[1] = 0;
				$("#bookPanel2").fadeOut("fast");
				$("#book2").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton3"]').click(function(){
            if($("#bookButton3").prop("checked") == true){
                console.log("Checkbox 3 is checked.");
				bookChecked[2] = 1;
				$("#bookPanel3").fadeIn("fast");
				$("#book3").fadeTo("slow",0.5);
            }
            if($("#bookButton3").prop("checked") == false){
                console.log("Checkbox 3 is unchecked.");
				bookChecked[2] = 0;
				$("#bookPanel3").fadeOut("fast");
				$("#book3").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton4"]').click(function(){
            if($("#bookButton4").prop("checked") == true){
                console.log("Checkbox 4 is checked.");
				bookChecked[3] = 1;
				$("#bookPanel4").fadeIn("fast");
				$("#book4").fadeTo("slow",0.5);
            }
            if($("#bookButton4").prop("checked") == false){
                console.log("Checkbox 4 is unchecked.");
				bookChecked[3] = 0;
				$("#bookPanel4").fadeOut("fast");
				$("#book4").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton5"]').click(function(){
            if($("#bookButton5").prop("checked") == true){
                console.log("Checkbox 5 is checked.");
				bookChecked[4] = 1;
				$("#bookPanel5").fadeIn("fast");
				$("#book5").fadeTo("slow",0.5);
            }
            if($("#bookButton5").prop("checked") == false){
                console.log("Checkbox 5 is unchecked.");
				bookChecked[4] = 0;
				$("#bookPanel5").fadeOut("fast");
				$("#book5").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton6"]').click(function(){
            if($("#bookButton6").prop("checked") == true){
                console.log("Checkbox 6 is checked.");
				bookChecked[5] = 1;
				$("#bookPanel6").fadeIn("fast");
				$("#book6").fadeTo("slow",0.5);
            }
            if($("#bookButton6").prop("checked") == false){
                console.log("Checkbox 6 is unchecked.");
				bookChecked[5] = 0;
				$("#bookPanel6").fadeOut("fast");
				$("#book6").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton7"]').click(function(){
            if($("#bookButton7").prop("checked") == true){
                console.log("Checkbox 7 is checked.");
				bookChecked[6] = 1;
				$("#bookPanel7").fadeIn("fast");
				$("#book7").fadeTo("slow",0.5);
            }
            if($("#bookButton7").prop("checked") == false){
                console.log("Checkbox 7 is unchecked.");
				bookChecked[6] = 0;
				$("#bookPanel7").fadeOut("fast");
				$("#book7").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton8"]').click(function(){
            if($("#bookButton8").prop("checked") == true){
                console.log("Checkbox 8 is checked.");
				bookChecked[7] = 1;
				$("#bookPanel8").fadeIn("fast");
				$("#book8").fadeTo("slow",0.5);
            }
            if($("#bookButton8").prop("checked") == false){
                console.log("Checkbox 8 is unchecked.");
				bookChecked[7] = 0;
				$("#bookPanel8").fadeOut("fast");
				$("#book8").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton9"]').click(function(){
            if($("#bookButton9").prop("checked") == true){
                console.log("Checkbox 9 is checked.");
				bookChecked[8] = 1;
				$("#bookPanel9").fadeIn("fast");
				$("#book9").fadeTo("slow",0.5);
            }
            if($("#bookButton9").prop("checked") == false){
                console.log("Checkbox 9 is unchecked.");
				bookChecked[8] = 0;
				$("#bookPanel9").fadeOut("fast");
				$("#book9").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton10"]').click(function(){
            if($("#bookButton10").prop("checked") == true){
                console.log("Checkbox 10 is checked.");
				bookChecked[9] = 1;
				$("#bookPanel10").fadeIn("fast");
				$("#book10").fadeTo("slow",0.5);
            }
            if($("#bookButton10").prop("checked") == false){
                console.log("Checkbox 10 is unchecked.");
				bookChecked[9] = 0;
				$("#bookPanel10").fadeOut("fast");
				$("#book10").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton11"]').click(function(){
            if($("#bookButton11").prop("checked") == true){
                console.log("Checkbox 11 is checked.");
				bookChecked[10] = 1;
				$("#bookPanel11").fadeIn("fast");
				$("#book11").fadeTo("slow",0.5);
            }
            if($("#bookButton11").prop("checked") == false){
                console.log("Checkbox 11 is unchecked.");
				bookChecked[10] = 0;
				$("#bookPanel11").fadeOut("fast");
				$("#book11").fadeTo("fast",1);
            }
        });
		
		$('input[id="bookButton12"]').click(function(){
            if($("#bookButton12").prop("checked") == true){
                console.log("Checkbox 12 is checked.");
				bookChecked[11] = 1;
				$("#bookPanel12").fadeIn("fast");
				$("#book12").fadeTo("slow",0.5);
            }
            if($("#bookButton12").prop("checked") == false){
                console.log("Checkbox 12 is unchecked.");
				bookChecked[11] = 0;
				$("#bookPanel12").fadeOut("fast");
				$("#book12").fadeTo("fast",1);
            }
        });

		
});

function updateValue() {
			totalPrice =0;
			for(i=0;i<=11;i++) {
				totalPrice += (bookChecked[i]* priceBook[i]); 
			}
		
			document.getElementById("totalPrice").innerHTML = "Total: $"+totalPrice.toFixed(2);

		}
		
setInterval(updateValue,1000);



