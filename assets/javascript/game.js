var randSt = "";
var winningNumber = 0;
var lost = false;
var won = false;
var randStMotto = "";
var stFlag = "";

function resetGame() {
  disableButton();
  var randSelect = randomState();
  randSt = randSelect.name;
  winningNumber = randSt.length;
  randStMotto = randSelect.stateMoto;
  stFlag = "./assets/images/"+randSelect.flag;
  console.log(randSt, randStMotto);

  var buf = "";

  for (var i = 0; i < randSt.length; i++) {
    buf += "_ ";
  }

  document.getElementById("dashes").textContent = buf;
  document.getElementById("guessed").innerHTML = '&nbsp;';
  document.getElementById("counter").textContent = 10;
  document.getElementById("hintAboutState").innerHTML = '&nbsp;';
  document.getElementById("flagHint").setAttribute("src","");
  document.getElementById("flagHint").setAttribute("alt","");


  found = false;
  lost = false;
  won = false;
}

function showMotto() {
  document.getElementById("hintAboutState").textContent = randStMotto;
}

function showFlag() {
  document.getElementById("flagHint").setAttribute("src",stFlag);
  document.getElementById("flagHint").setAttribute("alt",randSt);
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
  // document.getElementById("hintAboutState").textContent = randStMotto;
  stFlag = "./assets/images/"+randSelect.flag;

  document.getElementById("newGameBtn").addEventListener("click", function() {
    resetGame();
    // showMotto();//reset the motto
  });

  document.getElementById("mottoBtn").addEventListener("click", function() {
    showMotto();
  });

  document.getElementById("flagBtn").addEventListener("click", function() {
    // showMotto();
    showFlag();
  });
}

var body = document.getElementById("body");
window.addEventListener("keypress", function(keypress) {
  var found = false;
  var dashText = document.getElementById("dashes").textContent.split(" ");
  console.log(" \"" + keypress.key + "\"");
  if (
    !document
      .getElementById("guessed")
      .textContent.toLowerCase()
      .includes(keypress.key.toLowerCase())
  || (keypress.key==" ")) {
    // if the guess is not repetitive;

    if (won) {
      alert("You have won already; please start a new game!");
    } else if (lost) {
      alert("You have lost; please start a new game!");
      enableButton();
      document.getElementById("dashes").textContent = randSt;
    } else {
      // and if the game has not been lost go on to add to the already guessed-so-far list
      document.getElementById("guessed").textContent += keypress.key + " ";

      for (j = 0; j < randSt.length; j++) {
        if (keypress.key.toLowerCase() === randSt[j].toLowerCase()) {
          // if the guess is right
          dashText[j] = randSt[j];
          if(keypress.key.toLowerCase()==" ") {

          }
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
          console.log(number == 0);
          if (number == 0) {
            //lost the game in the last key press
            lost = true;
            console.log(document.getElementById("dashes").textContent);
            console.log(randSt);
            document.getElementById("dashes").textContent = randSt;
            enableButton();
            // enable button
            // show the answer
          }
        }
      }
      else {
        document.getElementById("dashes").textContent = dashText.join(" ");
      }

      if (winningNumber == 0 && !won) {
        var winScore = document.getElementById("wins");
        var winNum = winScore.innerHTML;
        winNum++;
        won = true;
        winScore.innerHTML = winNum;
        enableButton();
      }

    }
  } else {
    console.log("pressed key is not new");
    if (lost) {
      alert("You have lost; please start a new game!");
      document.getElementById("dashes").textContent = randSt;
      enableButton();
    } else if (won) {
      alert("You have won already; please start a new game!");
    } else {

      // var wrongScore = document.getElementById("counter");
      // var number = wrongScore.innerHTML;
      // if (number > 0) {
      //   number--;
      //   console.log(" chance remain number derecremented " + number);
      //   wrongScore.innerHTML = number;
      //   if (number == 0) {
      //     //lost the game in the last key press
      //     lost = true;
      //     document.getElementById("dashes").textContent = randSt;
      //     enableButton();
      //     // enable button
      //     // show the answer
      //   }
      // }
    }
    // found = true;
  }

});

function enableButton() {
  //alert("enablebutton");
  document.getElementById("newGameBtn").removeAttribute("disabled");
  document.getElementById("newGameBtn").setAttribute("class", "btn btn-success newGmBtn");
}

function disableButton() {
  document.getElementById("newGameBtn").setAttribute("class", "btn btn-success newGmBtn disabled");
  document.getElementById("newGameBtn").setAttribute("disabled", "disabled");

}

function randomState() {
  var states = [
    {
      name: "Alabama",
      stateMoto: "We dare defend our rights",
      flag: "150px-Flag_of_Alabama.svg.png"
    },
    {
      name: "Alaska",
      stateMoto: "North to the future",
      flag: "143px-Flag_of_Alaska.svg.png"
    },
    {
      name: "Arizona",
      stateMoto: "God enriches",
      flag: "150px-Flag_of_Arizona.svg.png"
    },
    {
      name: "Arkansas",
      stateMoto: "The people rule",
      flag: "150px-Flag_of_Arkansas.svg.png"
    },
    {
      name: "California",
      stateMoto: "Eureka",
      flag: "150px-Flag_of_California.svg.png"
    },
    {
      name: "Colorado",
      stateMoto: "Nothing without the Deity",
      flag: "150px-Flag_of_Colorado_designed_by_Andrew_Carlisle_Carson.svg.png"
    },
    {
      name: "Connecticut",
      stateMoto: "He who transplanted sustains",
      flag: "130px-Flag_of_Connecticut.svg.png"
    },
    {
      name: "Delaware",
      stateMoto: "Liberty and Independence",
      flag: "150px-Flag_of_Delaware.svg.png"
    },
    {
      name: "Florida",
      stateMoto: "In God We Trust",
      flag: "150px-Flag_of_Florida.svg.png"
    },
    {
      name: "Georgia",
      stateMoto: "Wisdom, justice, and moderation",
      flag: "160px-Flag_of_Georgia_(U.S._state).svg.png"
    },
    {
      name: "Hawaii",
      stateMoto: "The life of the land is perpetuated in righteousness",
      flag: "200px-Flag_of_Hawaii.svg.png"
    },
    {
      name: "Idaho",
      stateMoto: "Let it be perpetual",
      flag: "127px-Flag_of_Idaho.svg.png"
    },
    {
      name: "Illinois",
      stateMoto: "State sovereignty, national union	",
      flag: "167px-Flag_of_Illinois.svg.png"
    },
    {
      name: "Indiana",
      stateMoto: "The Crossroads of America	",
      flag: "150px-Flag_of_Indiana.svg.png"
    },
    {
      name: "Iowa",
      stateMoto: "Our liberties we prize and our rights we will maintain",
      flag: "146px-Flag_of_Iowa.svg.png"
    },
    {
      name: "Kansas",
      stateMoto: "To the stars through difficulties",
      flag: "167px-Flag_of_Kansas.svg.png"
    },
    {
      name: "Kentucky",
      stateMoto: "United we stand, divided we fall",
      flag: "190px-Flag_of_Kentucky.svg.png"
    },
    {
      name: "Louisiana",
      stateMoto: "Union, justice, confidence	",
      flag: "157px-Flag_of_Louisiana.svg.png"
    },
    {
      name: "Maine",
      stateMoto: "I lead",
      flag: "150px-Flag_of_Maine.svg.png"
    },
    {
      name: "Maryland",
      stateMoto: "Manly deeds, womanly words",
      flag: "150px-Flag_of_Maryland.svg.png"
    },
    {
      name: "Massachusetts",
      stateMoto: "By the sword we seek peace, but peace only under liberty",
      flag: "167px-Flag_of_Massachusetts.svg.png"
    },
    {
      name: "Michigan",
      stateMoto: "If you seek a pleasant peninsula, look about you",
      flag: "150px-Flag_of_Michigan.svg.png"
    },
    {
      name: "Minnesota",
      stateMoto: "The star of the North",
      flag: "158px-Flag_of_Minnesota.svg.png"
    },
    {
      name: "Mississippi",
      stateMoto: "By valor and arms",
      flag: "150px-Flag_of_Mississippi.svg.png"
    },
    {
      name: "Missouri",
      stateMoto: "Let the welfare of the people be the supreme law",
      flag: "172px-Flag_of_Missouri.svg.png"
    },
    {
      name: "Montana",
      stateMoto: "Gold and silver",
      flag: "150px-Flag_of_Montana.svg.png"
    },
    {
      name: "Nebraska",
      stateMoto: "Equality before the law",
      flag: "167px-Flag_of_Nebraska.svg.png"
    },
    {
      name: "Nevada",
      stateMoto: "All For Our Country and Battle Born",
      flag: "Flag_of_Nevada.svg.png"
    },
    {
      name: "New Hampshire",
      stateMoto: "Live Free or Die",
      flag: "150px-Flag_of_New_Hampshire.svg.png"
    },
    {
      name: "New Jersey",
      stateMoto: "Liberty and prosperity",
      flag: "167px-Flag_of_New_Jersey.svg.png"
    },
    {
      name: "New Mexico",
      stateMoto: "It grows as it goes",
      flag: "150px-Flag_of_New_Mexico.svg.png"
    },
    {
      name: "New York",
      stateMoto: "Ever upward",
      flag: "200px-Flag_of_New_York.svg.png"
    },
    {
      name: "North Carolina",
      stateMoto: "To be, rather than to seem",
      flag: "Flag_of_North_Carolina.svg.png"
    },
    {
      name: "North Dakota",
      stateMoto: "Liberty and union, now and forever, one and inseparable",
      flag: "128px-Flag_of_North_Dakota.svg.png"
    },
    {
      name: "Ohio",
      stateMoto: "With God, all things are possible",
      flag: "163px-Flag_of_Ohio.svg.png"
    },
    {
      name: "Oklahoma",
      stateMoto: "Labor conquers all things",
      flag: "150px-Flag_of_Oklahoma.svg.png"
    },
    {
      name: "Oregon",
      stateMoto: "She flies with her own wings",
      flag: "167px-Flag_of_Oregon_(reverse).svg.png"
    },
    {
      name: "Pennsylvania",
      stateMoto: "Virtue, Liberty, and Independence",
      flag: "150px-Flag_of_Pennsylvania.svg.png"
    },
    {
      name: "Rhode Island",
      stateMoto: "Hope",
      flag: "109px-Flag_of_Rhode_Island.svg.png"
    },
    {
      name: "South Carolina",
      stateMoto: "While I breathe, I hope Ready in soul and resource",
      flag: "150px-Flag_of_South_Carolina.svg.png"
    },
    {
      name: "South Dakota",
      stateMoto: "Under God the people rule",
      flag: "Flag_of_South_Dakota.svg.png"
    },
    {
      name: "Tennessee",
      stateMoto: "Agriculture and Commerce",
      flag: "167px-Flag_of_Tennessee.svg.png"
    },
    {
      name: "Texas",
      stateMoto: "Friendship",
      flag: "150px-Flag_of_Texas.svg.png"
    },
    {
      name: "Utah",
      stateMoto: "Industry",
      flag: "167px-Flag_of_Utah_(2011-present).svg.png"
    },
    {
      name: "Vermont",
      stateMoto: "Freedom and Unity",
      flag: "167px-Flag_of_Vermont.svg.png"
    },
    {
      name: "Virginia",
      stateMoto: "Thus always to tyrants",
      flag: "146px-Flag_of_Virginia.svg.png"
    },
    {
      name: "Washington",
      stateMoto: "By and by",
      flag: "168px-Flag_of_Washington.svg.png"
    },
    {
      name: "West Virginia",
      stateMoto: "Mountaineers are always free",
      flag: "190px-Flag_of_West_Virginia.svg.png"
    },
    {
      name: "Wisconsin",
      stateMoto: "Forward",
      flag: "150px-Flag_of_Wisconsin.svg.png"
    },
    {
      name: "Wyoming",
      stateMoto: "Equal Rights",
      flag: "143px-Flag_of_Wyoming.svg.png"
    }
  ];

  var randomIndex = Math.floor(Math.random() * 50);
  console.log(states[randomIndex]);
  return states[randomIndex];
}
