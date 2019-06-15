var player = 'X';

function handleClick(btnID){
    var btn = document.getElementById(btnID);
    if(btn.innerText === '-'){    
        btn.innerText = player;
        if(player === 'X') player = 'O';
        else player = 'X';

        calcScore();
    }
}

function calcScore(){
    var btn1 = document.getElementById('btn1').innerText;
    var btn2 = document.getElementById('btn2').innerText;
    var btn3 = document.getElementById('btn3').innerText;
    var btn4 = document.getElementById('btn4').innerText;
    var btn5 = document.getElementById('btn5').innerText;
    var btn6 = document.getElementById('btn6').innerText;
    var btn7 = document.getElementById('btn7').innerText;
    var btn8 = document.getElementById('btn8').innerText;
    var btn9 = document.getElementById('btn9').innerText;

    if(btn1 ===btn2 && btn2 === btn3 && btn2 != '-') alert(btn1);
    else if(btn4 ===btn5 && btn5 === btn6 && btn4 != '-') alert(btn4);
    else if(btn9 ===btn8 && btn8 === btn7 && btn7 != '-') alert(btn7);
    else if(btn1 ===btn4 && btn4 === btn7 && btn1 != '-') alert(btn1);
    else if(btn2 ===btn5 && btn5 === btn8 && btn2 != '-') alert(btn2);
    else if(btn9 ===btn6 && btn6 === btn3 && btn3 != '-') alert(btn3);
    else if(btn1 ===btn5 && btn5 === btn9 && btn9 != '-') alert(btn9);
    else if(btn3 ===btn5 && btn5 === btn7 && btn7 != '-') alert(btn3);
}