// Ensures all other possible language results are hidden when form is submitted in event of multiple form submissions
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


$("document").ready(function() {
  $("form#programmingQuiz").submit(function(event) {
    event.preventDefault();

    const ophidiophobiaStatus = JSON.parse($("input:radio[name=ophidiophobia]:checked").val());
    const rigidityValue = parseInt(($("input:radio[name=rigidity]:checked").val()));
    const airSpeedResponse = $("input#airSpeed").val();
    const favColor = $("#color").val();
    const queensResponse = parseInt($("#queens").val());

    if (ophidiophobiaStatus) {
      if(rigidityValue === 3) {
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
  });
});