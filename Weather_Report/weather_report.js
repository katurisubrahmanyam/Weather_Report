let searchInput=document.getElementById("search_inputbox");
let searchIcon=document.getElementById("search_icon");
let weatherAPIURL;
searchIcon.addEventListener("click", async()=>{
    let cityName=searchInput.value;
    weatherAPIURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=94d7ed905a64d8bc61eefa7c18afe68b`;
    try{
    let weatherAPIResponse= await fetch(weatherAPIURL);
    let weatherReport= await weatherAPIResponse.json();
    if(weatherReport.cod!=200){
        alert("City not found");
        return;
    }
    console.log(weatherReport);
    document.getElementById("city_name").textContent=weatherReport.name;
    document.getElementById("weather_report_heading").textContent=weatherReport.weather[0].description;
    document.getElementById("celsius_heading").innerHTML=`${parseInt(weatherReport.main.temp-273.15)}<sup>o</sup>C`;
    document.getElementById("humidity_percentage").textContent=`${weatherReport.main.humidity}%`
    document.getElementById("wind_speed").textContent=`${weatherReport.wind.speed}km/hr`;
    let weatherId=weatherReport.weather[0].id;
    let weatherImage=document.getElementById("weather_icon");
    if(weatherId>=200 && weatherId<=232){
    weatherImage.className="fa-solid fa-bolt";
    document.body.style.backgroundImage=`url("../images/thunderstrom.jpg")`;
}
else if(weatherId>=300 && weatherId<=321){
    weatherImage.className="fa-solid fa-cloud-rain";
    document.body.style.backgroundImage=`url("../images/drizzlee.jpg")`;
}
else if(weatherId>=500 && weatherId<=531){
    weatherImage.className="fa-solid fa-cloud-showers-heavy";
    document.body.style.backgroundImage=`url("../images/heavyrain.jpg")`;
}
else if(weatherId>=600 && weatherId<=622){
    weatherImage.className="fa-solid fa-snowflake";
    document.body.style.backgroundImage=`url("../images/snow.jpg")`;
}
else if(weatherId>=701 && weatherId<=781){
    weatherImage.className="fa-solid fa-smog";
    document.body.style.backgroundImage=`url("../images/hazeee.jpg")`;
}
else if(weatherId==800){
    weatherImage.className="fa-solid fa-sun";
    document.body.style.backgroundImage=`url("../images/clearsky.jpg")`;
}
else if(weatherId>=801 && weatherId<=804){
    weatherImage.className="fa-solid fa-cloud";
    document.body.style.backgroundImage=`url("../images/cloudyy.jpg")`;
}
     searchInput.value="";
    }
    catch(error){
        console.log(error);
        alert("Something went wrong. Please try again later")
    }
})