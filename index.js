// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myFunction);
 
var MatchDataArr=JSON.parse(localStorage.getItem("schedule")) || [];

function myFunction()
{
  event.preventDefault();
  var obj={

    MatchNumber:masaiForm.matchNum.value,
    TeamA:masaiForm.teamA.value,
    TeamB:masaiForm.teamB.value,
    Date:masaiForm.date.value,
    Venue:masaiForm.venue.value
  }
    MatchDataArr.push(obj);
    console.log(MatchDataArr)

    localStorage.setItem("schedule",JSON.stringify(MatchDataArr));
}