var randSt = "";
var winningNumber = 0;
var lost = false;
var won = false;

function resetGame() {
  var randSelect = randomState();
  randSt = randSelect.name;
  winningNumber = randSt.length;
  randStMotto = randSelect.stateMoto;
  console.log(randSt, randStMotto);

  var buf = "";

  for (var i = 0; i < randSt.length; i++) {
    buf += "_ ";
  }

  document.getElementById("dashes").textContent = buf;
  document.getElementById("guessed").textContent = "";
  document.getElementById("counter").textContent = 10;
  document.getElementById("hintAboutState").textContent = randStMotto;
  found = false;
  lost = false;
  won = false;
}

function init() {
  var randSelect = randomState();
  randSt = randSelect.name;
  winningNumber = randSt.length;
  randStMotto = randSelect.stateMoto;
  console.log(randSt, randStMotto);

  var dashes = document.createElement("p");
  var buf = "";

  for (var i = 0; i < randSt.length; i++) {
    buf += "_ ";
  }

  dashes.textContent = buf;
  dashes.setAttribute("id", "dashes");
  document.getElementById("play-area").appendChild(dashes);
  document.getElementById("hintAboutState").textContent = randStMotto;
  document.getElementById("newGameBtn").addEventListener("click", function() {
    resetGame();
  });
}

var body = document.getElementById("body");
window.addEventListener("keypress", function(keypress) {
  var found = false;
  var dashText = document.getElementById("dashes").textContent.split(" ");
  if (
    !document
      .getElementById("guessed")
      .textContent.toLowerCase()
      .includes(keypress.key.toLowerCase())
  ) {
    // if the guess is not repetitive;

    if (won) {
      alert("You have won already; please start a new game!");
    } else if (lost) {
      alert("You have lost; please start a new game!");
    } else {
      // and if the game has not been lost go on to add to the already guessed-so-far list
      document.getElementById("guessed").textContent += keypress.key + " ";

      for (j = 0; j < randSt.length; j++) {
        if (keypress.key.toLowerCase() === randSt[j].toLowerCase()) {
          // if the guess is right
          dashText[j] = randSt[j];
          winningNumber--;
          found = true;
        }
        //keep trying till you hit it
      }

      if (!found) {
        var wrongScore = document.getElementById("counter");
        var number = wrongScore.innerHTML;
        if (number > 0) {
          number--;
          console.log(" chance remain number derecremented " + number);
          wrongScore.innerHTML = number;
          if (number == 0) {
            //lost the game in the last key press
            lost = true;
            this.document.getElementById("dashes").textContent = randSt;

            // enable button
            // show the answer
          }
        }
      }

      if (winningNumber == 0 && !won) {
        var winScore = document.getElementById("wins");
        var winNum = winScore.innerHTML;
        winNum++;
        won = true;
        winScore.innerHTML = winNum;
      }

      document.getElementById("dashes").textContent = dashText.join(" ");
    }
  } else {
    console.log("pressed key is new");
    if (lost) {
      alert("You have lost; please start a new game!");
    } else if (won) {
      alert("You have won already; please start a new game!");
    } else {
      var wrongScore = document.getElementById("counter");
      var number = wrongScore.innerHTML;
      if (number > 0) {
        number--;
        console.log(" chance remain number derecremented " + number);
        wrongScore.innerHTML = number;
        if (number == 0) {
          //lost the game in the last key press
          lost = true;
          this.document.getElementById("dashes").textContent = randSt;

          // enable button
          // show the answer
        }
      }
    }
    // found = true;
  }

});

function randomState() {
  var states = [
    {
      name: "Alabama",
      stateMoto: "We dare defend our rights"
    },
    {
      name: "Alaska",
      stateMoto: "North to the future"
    },
    {
      name: "Arizona",
      stateMoto: "God enriches"
    },
    {
      name: "Arkansas",
      stateMoto: "The people rule"
    },
    {
      name: "California",
      stateMoto: "Eureka"
    },
    {
      name: "Colorado",
      stateMoto: "Nothing without the Deity"
    },
    {
      name: "Connecticut",
      stateMoto: "He who transplanted sustains"
    },
    {
      name: "Delaware",
      stateMoto: "Liberty and Independence"
    },
    {
      name: "Florida",
      stateMoto: "In God We Trust"
    },
    {
      name: "Georgia",
      stateMoto: "Wisdom, justice, and moderation"
    },
    {
      name: "Hawaii",
      stateMoto: "The life of the land is perpetuated in righteousness"
    },
    {
      name: "Idaho",
      stateMoto: "Let it be perpetual"
    },
    {
      name: "Illinois",
      stateMoto: "State sovereignty, national union	"
    },
    {
      name: "Indiana",
      stateMoto: "The Crossroads of America	"
    },
    {
      name: "Iowa",
      stateMoto: "Our liberties we prize and our rights we will maintain"
    },
    {
      name: "Kansas",
      stateMoto: "To the stars through difficulties"
    },
    {
      name: "Kentucky",
      stateMoto: "United we stand, divided we fall"
    },
    {
      name: "Louisiana",
      stateMoto: "Union, justice, confidence	"
    },
    {
      name: "Maine",
      stateMoto: "I lead"
    },
    {
      name: "Maryland",
      stateMoto: "Manly deeds, womanly words"
    },
    {
      name: "Massachusetts",
      stateMoto: "By the sword we seek peace, but peace only under liberty"
    },
    {
      name: "Michigan",
      stateMoto: "If you seek a pleasant peninsula, look about you"
    },
    {
      name: "Minnesota",
      stateMoto: "The star of the North"
    },
    {
      name: "Mississippi",
      stateMoto: "By valor and arms"
    },
    {
      name: "Missouri",
      stateMoto: "Let the welfare of the people be the supreme law"
    },
    {
      name: "Montana",
      stateMoto: "Gold and silver"
    },
    {
      name: "Nebraska",
      stateMoto: "Equality before the law"
    },
    {
      name: "Nevada",
      stateMoto: "All For Our Country and Battle Born"
    },
    {
      name: "New Hampshire",
      stateMoto: "Live Free or Die"
    },
    {
      name: "New Jersey",
      stateMoto: "Liberty and prosperity"
    },
    {
      name: "New Mexico",
      stateMoto: "It grows as it goes"
    },
    {
      name: "New York",
      stateMoto: "Ever upward"
    },
    {
      name: "North Carolina",
      stateMoto: "To be, rather than to seem"
    },
    {
      name: "North Dakota",
      stateMoto: "Liberty and union, now and forever, one and inseparable"
    },
    {
      name: "Ohio",
      stateMoto: "With God, all things are possible"
    },
    {
      name: "Oklahoma",
      stateMoto: "Labor conquers all things"
    },
    {
      name: "Oregon",
      stateMoto: "She flies with her own wings"
    },
    {
      name: "Pennsylvania",
      stateMoto: "Virtue, Liberty, and Independence"
    },
    {
      name: "Rhode Island",
      stateMoto: "Hope"
    },
    {
      name: "South Carolina",
      stateMoto: "While I breathe, I hope Ready in soul and resource"
    },
    {
      name: "South Dakota",
      stateMoto: "Under God the people rule"
    },
    {
      name: "Tennessee",
      stateMoto: "Agriculture and Commerce"
    },
    {
      name: "Texas",
      stateMoto: "Friendship"
    },
    {
      name: "Utah",
      stateMoto: "Industry"
    },
    {
      name: "Vermont",
      stateMoto: "Freedom and Unity"
    },
    {
      name: "Virginia",
      stateMoto: "Thus always to tyrants"
    },
    {
      name: "Washington",
      stateMoto: "By and by"
    },
    {
      name: "West Virginia",
      stateMoto: "Mountaineers are always free"
    },
    {
      name: "Wisconsin",
      stateMoto: "Forward"
    },
    {
      name: "Wyoming",
      stateMoto: "Equal Rights"
    }
  ];

  var randomIndex = Math.floor(Math.random() * 50);
  console.log(states[randomIndex]);
  return states[randomIndex];
}
