
$("document").ready(function() {
  $("form#programmingQuiz").submit(function(event) {
    event.preventDefault();

    const ophidiophobiaStatus = $("input:radio[name=ophidiophobia]:checked").val();
    const rigidityValue = ($("input:radio[name=rigidity]:checked").val());
    const airSpeedResponse = $("input#airSpeed").val();
    const favColor = $("#color").val();
    const queensResponse = parseInt($("#queens").val());

    if (ophidiophobiaStatus) {
      if(rigidityValue === 3) {
        $("#csharp").show();
      } else {
        $("#javascript").show();
      }
    } else {
      $("#python").show();
    }
  });
});