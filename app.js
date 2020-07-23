
console.log(player1_Button);
console.log(player2_Button);

player1_Button.addEventListener('click',rollDice_1);

var player1=["Prograd",0,1000];
var player2=["FacePrep",0,1000];

function rollDice_1() {
  var position=  Math.floor(Math.random()*6)+1;
  console.log("playre one rolls",position);
    changePosition_1(player1[1],position);
}

function changePosition_1(old, currentPos) {
    var newPosition=old+currentPos;
    player1[1]=newPosition;
    console.log(player1[1]);
    updateMoney_1(player1[1]);
}

function updateMoney_1(p1) {
    var updateMoney=0;
    if (p1<board.length) 
    updateMoney=player1[2]-board[p1-1];
    else{
        p1=p1%15;
        updateMoney=player1[2]-board[p1-1];
    }
    console.log(updateMoney);
}