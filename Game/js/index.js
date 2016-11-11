function playGame(){var Q1 = prompt("You wake up and it is election day, do you take the SUBWAY or the CAR?");
if (Q1.toLowerCase() === "subway") {
  var Q2 = prompt("You get off the train and bump into a shady looking guy, suddenly you realise your pocket is empty of your wallet. Do you...CHASE or CONTINUE?");
} else if (Q1.toLowerCase() === "car") {
  var Q3 = prompt("You go back to your car. The man quickly runs away. Do you...CHASE him or GO BACK to the poll?");
}
if (Q2.toLowerCase() === "chase") {
  var Q4 = prompt("You catch up to him, however, if you continue you will be too late to cast your vote. Will you INTERROGATE him or STOP?");
}
                    
if (Q4.toLowerCase() === "interrogate") {
  alert("You interrogate him. However, he repeatedly denies stealing it. You remember you left your wallet at home and go back in a state of shame.");
} 
if (Q4.toLowerCase() === "stop") {
  var Q5 = prompt("You make it to the election on time! Who will you choose, Trump or Clinton?");
}
if (Q5.toLowerCase() === "trump") {
  alert("Interesting, wait for for part 2 of Choose Your Adventure: America in Trouble coming out soon.");
} else {
  alert("Ah...a Clinton supporter I see. Well! Wait for part 2 of Choose Your Adventure: America in Trouble coming out soon.");
}
                
if (Q3.toLowerCase() === "chase") {
  var Q6 = prompt("You begin to chase the man. You catch up to him and confront him. What do you do? RUN, FIGHT or try to TALK?");
} else if (Q3.toLowerCase() === "go back") {
  var Q5 = prompt("You make it to the election on time! Who will you choose, Trump or Clinton?");
}
if (Q2.toLowerCase() === "continue") {
  var Q5 = prompt("You make it to the election on time! Who will you choose, Trump or Clinton?");
} 
if (Q5.toLowerCase() === "trump") {
  alert("Interesting, wait for for part 2 of Choose Your Adventure: America in Trouble coming out soon.");
} else {
  alert("Ah...a Clinton supporter I see. Well! Wait for part 2 of Choose Your Adventure: America in Trouble coming out soon.");
} 
if (Q6.toLowerCase() === "run") {
  alert("Smart choice, violence is never the answer.");
} else if (Q6.toLowerCase() === "fight") {
  alert("Smart choice, violence is never the answer. However, you notice the man has a knife. You chicken out and run away, which is also a smart decision.");
}}