// write js code here corresponding to matches.html

var MatchDataArr=JSON.parse(localStorage.getItem("schedule"));

console.log(MatchDataArr);

document.querySelector("#filterVenue").addEventListener("change",FilterByName);

function FilterByName()
{
    var selected=document.querySelector("#filterVenue").value;
   // console.log(selected)
    
   if(selected=="none")
   {
       DisplayData(MatchDataArr)
   }
   else{
    var out=MatchDataArr.filter(function(elem)
    {
        return selected==elem.Venue;
    })
    console.log(out)

    DisplayData(out)

   }
   
}

var FavouriteArr=JSON.parse(localStorage.getItem("favourites")) || [];

DisplayData(MatchDataArr);

function DisplayData(MatchDataArr)
{
    document.querySelector("tbody").innerHTML="";
    MatchDataArr.forEach(function(elem)
    {

        var row=document.createElement("tr");

        var td1=document.createElement("td")
        td1.innerText=elem.MatchNumber;
        

        var td2=document.createElement("td");
        td2.innerText=elem.TeamA;

        var td3=document.createElement("td");
        td3.innerText=elem.TeamB;

        var td4=document.createElement("td");
        td4.innerText=elem.Date;

        var td5=document.createElement("td");
        td5.innerText=elem.Venue;

        var td6=document.createElement("td")
          td6.innerText="Add as Favourites"
          td6.style.color="green"
          td6.style.cursor="pointer"

          td6.addEventListener("click",function()
          {
              FavouriteFn(elem);
          })

        row.append(td1,td2,td3,td4,td5,td6)
       
        document.querySelector("tbody").append(row)

    })
    function FavouriteFn(elem)
    {
        console.log(elem)
        FavouriteArr.push(elem)
        localStorage.setItem("favourites",JSON.stringify(FavouriteArr))
    }
}