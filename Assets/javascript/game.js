
var displayTotalScore= $("#display-total-score");
var targetScore=0;
var winsval=0;
var lossesval=0;
$(document).ready(function() {
  reset();
});

function reset(){
    targetScore = $("#random-target-score").text(Math.floor(Math.random()*500) +10);
    $("#img1").val(Math.floor(Math.random()*10) +1);
    $("#img2").val(Math.floor(Math.random()*10) +1);
    $("#img3").val(Math.floor(Math.random()*10) +1);
    $("#img4").val(Math.floor(Math.random()*10) +1);
    displayTotalScore.text(0);
}

$(".jwlimg").on("click", function(){
    var pointsScored = displayTotalScore.text(parseInt(displayTotalScore.text()) + parseInt($(this).val()));
        if (parseInt(targetScore.text()) === parseInt(pointsScored.text())){
        winsval++;
        $("#wins").text("Wins: " + winsval); 
        reset();  
    }
    else if(parseInt(targetScore.text()) < parseInt(pointsScored.text())){
        lossesval++;
        $("#losses").text("Losses: " + lossesval);
        reset();
    }
});
