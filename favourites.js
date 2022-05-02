// write js code here corresponding to favourites.html
var FavouriteArr=JSON.parse(localStorage.getItem("favourites")) ;

console.log(FavouriteArr);

DisplayData(FavouriteArr);

function DisplayData(FavouriteArr)
{
    document.querySelector("tbody").innerHTML="";

    FavouriteArr.forEach(function(elem,index)
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
          td6.innerText="DELETE";
          td6.style.color="red";
          td6.style.cursor="pointer"

          td6.addEventListener("click",function()
          {
              DeleteFn(elem,index);
          })

        row.append(td1,td2,td3,td4,td5,td6)
       
        document.querySelector("tbody").append(row)

    })

  
    function DeleteFn(elem,index)
    {
        FavouriteArr.splice(index,1)
        console.log(elem)
        localStorage.setItem("favourites",JSON.stringify(FavouriteArr))
        DisplayData(FavouriteArr);
      
    }
}