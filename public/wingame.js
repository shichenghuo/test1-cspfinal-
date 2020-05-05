let player1;
let player2;
player1Match = false;
player2Match = false;

function wingame(){

answer1 = a[0];
answer2 = a[1];

if (player1.label == answer1){
player1Match = true;
}

if (otherPlayerPose.label == answer2){
player2Match = true;
}

if (player1Match && player2Match){
j++;
timeValue=0;
player1Match = false;
player2Match = false;
}

}