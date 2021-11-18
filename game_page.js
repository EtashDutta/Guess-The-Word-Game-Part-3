p1_name = localStorage.getItem("p1")
p2_name = localStorage.getItem("p2")

p1_score = 0;
p2_score = 0;

answer_turn = ""
question_turn = ""

document.getElementById("player1_name").innerHTML = p1_name + " : "
document.getElementById("player2_name").innerHTML = p2_name + " : "

document.getElementById("player1_score").innerHTML = p1_score
document.getElementById("player2_score").innerHTML = p2_score

document.getElementById("player_question").innerHTML = "Question Turn - " + p1_name
document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2_name

function send() {
    getWord = document.getElementById("word").value
    console.log(getWord)
    word = getWord.toLowerCase();
    console.log(word)

    charAt1 = word.charAt(1)
    console.log(charAt1)

    lengthBy2 = Math.floor(word.length / 2)
    charAt2 = word.charAt(lengthBy2)
    console.log(charAt2)

    charAt3 = word.charAt(word.length - 1)
    console.log(charAt3)

    remove_charAt1 = word.replace(charAt1, "_")
    console.log(remove_charAt1);

    remove_charAt2 = remove_charAt1.replace(charAt2, "_")
    console.log(remove_charAt2);

    remove_charAt3 = remove_charAt2.replace(charAt3, "_")
    console.log(remove_charAt3);

    question_number = "<h4 id='word_display'>Q:" + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = "";
}

function check() {
    getAnswer = document.getElementById("input_check_box").value
    answer = getAnswer.toLowerCase()
    if (answer == word) {
        if (answer_turn == "p1") {
            p1_score = p1_score + 1
            document.getElementById("player1_score").innerHTML = p1_score

        }
        else {
            p2_score = p2_score + 1
            document.getElementById("player2_score").innerHTML = p2_score
        }
    }


    if (answer_turn == "p1") {
        answer_turn = "p2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2_name
    }
    else {
        answer_turn = "p1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + p1_name
    }

    if (question_turn == "p1") {
        question_turn = "p2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + p2_name
    }
    else {
        question_turn = "p1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + p1_name
    }
    document.getElementById("output").innerHTML = ""
}