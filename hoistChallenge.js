var answer1 = "dance"; //works

function hoistChallenge() {
  //   var answer1 = answer;
  //   let answer1 = dance;
  if (answer1 == "dance") {
    //   var answer1 = answer;
    //   let answer1 = dance;
    if (answer1 == "dance") {
      //   var answer = "dance";
      console.log("It worked");
    } else {
      console.log("Stage 2 Failed");
    }
  } else {
    console.log("Stage 1 Failed");
  }
}

hoistChallenge();

// let answer1 = "dance";
var answer1 = "dance"; //doesnt work
