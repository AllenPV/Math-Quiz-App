function Add_User()
{
    player1_name = document.getElementById("Username1").value;
    player2_name = document.getElementById("Username2").value;
    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name);
    window.location.replace("quiz_game_page.html");
}