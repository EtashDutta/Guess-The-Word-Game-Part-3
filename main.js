function addUser(){
    p1=document.getElementById("p1_text_input").value;
    p2=document.getElementById("p2_text_input").value;

    localStorage.setItem("p1",p1);
    localStorage.setItem("p2",p2);

    window.location="game_page.html";

}