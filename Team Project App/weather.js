 async function loadData() {
    var city = document.getElementById("city_id").value
    var url ='http://api.openweathermap.org/data/2.5/forecast?mode=json&q='+ city +'&appid=3cd1eb4acb319b809c66b1d5fec3d8d7'
    //var url ='http://api.openweathermap.org/data/2.5/forecast?mode=json&q=Berlin&appid=3cd1eb4acb319b809c66b1d5fec3d8d7'
    var table='<table class="table table-dark">'
    table+=`<thead>
            <tr>
                <th scope="col">City</th>
                <th scope="col">Temperature</th>
                <th scope="col">Feels Like</th>
                <th scope="col">Weather</th>
                <th scope="col">Description</th>
                <th scope="col">Wind</th>
            </tr>
            </thead><tbody>`
    var response = await fetch(url)
    var data = await response.json()
    console.log(data)
    //console.log(data["list"][0]["main"]["feels_like"])
    //console.log(data["list"][0]["weather"][0]["main"])
    if(city === city){
    table += '<tr class="table table-dark">'
                    + "<td>" + data["city"]["name"]+ "</td>"
                    + "<td>" + data["list"][0]["main"]["temp"] + "</td>"
                    + "<td>" + data["list"][0]["main"]["feels_like"] + "</td>"
                    + "<td>" + data["list"][0]["weather"][0]["main"] + "</td>"
                    + "<td>" + data["list"][0]["weather"][0]["description"] + "</td>"
                    + "<td>" + data["list"][0]["wind"]["speed"]+ "</td>"
                    + '</tr>'
     //+ data["list"][0]["weather"][0]["main"] +
    }else if(city!== city){
      alert=("Sorry that city doesn't exist, please try again");
    }
    table += "</tbody></table>"
    document.getElementById("demo").innerHTML = table
  }

  

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.display = "none";
    }

    function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("main").style.display = "block";
    }    