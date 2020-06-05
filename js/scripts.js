// Gives a language reccomendation based on first two form responses
const languageEval = function (snakeFear, rigidity) {
  if (snakeFear === "true") {
    if (rigidity === 3) {
      hideOtherResults("cSharp");
      $("#csharp").show();
    } else {
      hideOtherResults("javaScript");
      $("#javascript").show();
    }
  } else {
    hideOtherResults("python");
    $("#python").show();
  }
}

// Ensures all other possible language results are hidden when form is submitted in event of consecutive form submissions
const hideOtherResults = function (language) {
  if (language === "javaScript") {
    $("#csharp").hide();
    $("#python").hide();
  } else if (language === "cSharp") {
    $("#python").hide();
    $("#javascript").hide();
  } else {
    $("#csharp").hide();
    $("#javascript").hide();
  }
}

// Displays relevent bonus results depending on form response
const displayBonusResults = function (airSpeed, favColor, queenCount) {
  if (airSpeed === "African or European?") {
    $("#monty-python").show();
  }

  if (favColor === "#000000") {
    $("#henry-ford").show();
  }

  if (queenCount === 8) {
    $("#smart").show();
  }
}

// Hides all secret results
const hideSecrets = function () {
  $("#monty-python").hide();
  $("#henry-ford").hide();
  $("#smart").hide();
}


$("document").ready(function() {
  $("form#programmingQuiz").submit(function(event) {
    event.preventDefault();

    const ophidiophobiaStatus =$("input:radio[name=ophidiophobia]:checked").val();
    const rigidityValue = parseInt(($("input:radio[name=rigidity]:checked").val()));
    const airSpeedResponse = $("input#airSpeed").val();
    const favColor = $("#color").val();
    const queensResponse = parseInt($("#queens").val());
    
    hideSecrets();

    languageEval(ophidiophobiaStatus, rigidityValue);

    displayBonusResults(airSpeedResponse, favColor, queensResponse);
  });
});