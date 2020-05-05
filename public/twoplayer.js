var myPlayer = 1;
var otherPlayerPose;

function twoplayer() {
  for (let i = 0; i < poses.length; i++) {
  if (myPlayer == 1) {
    player1 = pose[0];
    otherPlayerPose = pose[1];
  } else {
    player1 = pose[1]
    otherPlayerPose = pose[0];
  }
   if (player1.label == "t") {
      let s1 = new shape(30, 290, "T", 20);
      s1.display();
    }
    if (otherPlayerPose.label == "t") {
      let s1 = new shape(490, 290, "T", 20);
      s1.display();
    }

    if (player1.label == 'i') {
      let s2 = new shape(30, 290, "I", 20);
      s2.display();
    }
    if (otherPlayerPose.label == 'i') {
      let s2 = new shape(490, 290, "I", 20);
      s2.display();
    }

    if (player1.label == 'a') {
      let s3 = new shape(30, 290, "A", 20);
      s3.display();
    }
    if (otherPlayerPose.label == 'a') {
      let s3 = new shape(490, 290, "A", 20);
      s3.display();
    }

    if (player1.label == 'o') {
      let s4 = new shape(30, 290, "O", 20);
      s4.display();
    }

    if (otherPlayerPose.label == 'o') {

      let s4 = new shape(490, 290, "O", 20);
      s4.display();
    }

    if (player1.label == 'l') {
      let s5 = new shape(30, 290, "L", 20);
      s5.display();
    }

    if (otherPlayerPose.label == 'l') {
      let s5 = new shape(490, 290, "L", 20);
      s5.display();
    }

    if (player1.label == 'f') {
      let s6 = new shape(30, 290, "F", 20);
      s6.display();
    }

    if (otherPlayerPose.label == 'f') {
      let s6 = new shape(490, 290, "F", 20);
      s6.display();
    }
  }
}
