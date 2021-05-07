player1_name = localStorage.getItem("p1");
player2_name = localStorage.getItem("p2");

player1_score = 0;
player2_score = 0;

document.getElementById("p1name").innerHTML = player1_name + " : ";
document.getElementById("p2name").innerHTML = player2_name + " : ";
document.getElementById("p1score").innerHTML = player1_score;
document.getElementById("p2score").innerHTML = player2_score;

document.getElementById("question1").innerHTML = "question-turn" + player1_name;
document.getElementById("answer1").innerHTML = "answer-turn" + player2_name;

function send() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    AA = parseInt(num1) * parseInt(num2);
    question_number = "<h4>" + num1 + " X " + num2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==AA){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("p1score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("p2score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("question1").innerHTML="question_turn"+player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("question1").innerHTML="question_turn"+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("answer1").innerHTML="answer_turn"+player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("answer1").innerHTML="answer_turn"+player1_name;
    }
    document.getElementById("output").innerHTML="";
}