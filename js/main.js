var findWeatherInput=document.querySelector('input')

async function getWeather(location){

    var respose = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f767f1b241f244e68be125008241604&q=${location}&days=3`);
    var data= await respose.json()
    console.log(data);
showWeather(data)
}
getWeather(location)

findWeatherInput.addEventListener('input',function(){
    getWeather(findWeatherInput.value)
})
// let id =navigator.geolocation.watchPosition()
const monthes = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function getDay(D){
    var day=Days[D.getDay()]
    
   return day
  }
 
function showWeather(data){
let weather=`
<div class="col-md-4 card moon-sun border-0" >
<div class="">
    <div class="card-header text-light d-flex justify-content-between">
       <span>${new Date(data.location.localtime).toLocaleString('en-us',{weekday:'long'})}</span>
       <p>${new Date(data.location.localtime).getDate()}<span>${new Date(data.location.localtime).toLocaleString('en-us',{month:'short'})}</span></p>
    </div>
    <div class="card-body">
        <p class="text-secondary">${data.location.name}</p>
        <div class="content-1 text-white d-flex justify-content-between">
            <span class="fw-bold">${data.current.temp_c}<sup>o</sup>C</span>
            <span><img src="${'https://'+data.current.condition.icon}" class='w-100' alt=""></span>
        </div>

        <p class="text-primary">${data.current.condition.text}</p>

        <div class="icon text-secondary">
            <span class="mx-3"><img src="imgs/icon-umberella.png" alt="photo" class="mx-1">${data.current.wind_mph}</span>
            <span class="mx-3"><img src="imgs/icon-compass.png" alt="photo"  class="mx-1">${data.current.wind_kph}km/h</span>
            <span class="mx-3"><img src="imgs/icon-wind.png" alt="photo" class="mx-1">${data.current.wind_dir
            }</span>
        </div>
    </div>


</div>
</div>
<div class="col-md-4  card bg-dark border-0" >
<div class="">
    <div class="card-header  text-center text-light ">
       <span>${new Date(data.forecast.forecastday[1].date).toLocaleString('en-us',{weekday:'long'})}</span>
    </div>
    <div class="card-body text-center">
        <span><img  src="${'https://'+data.forecast.forecastday[1].day.condition.icon}" alt=""></span>
        <div class="content  text-white ">
            <span class="fs-4 fw-bold">${data.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>C</span>
            <P class=" text-secondary">22<sup>o</sup>C</P>
        </div>
        <p class="text-primary">${data.forecast.forecastday[1].day.condition.text}</p>
    </div>
</div>
</div>
<div class="col-md-4 card moon-sun border-0 " >
<div class="">
    <div class="card-header text-center text-light ">
       <span class="text-center">${new Date(data.forecast.forecastday[2].date).toLocaleString('en-us',{weekday:'long'})}</span>
    </div>
    <div class="card-body text-center">
        <span><img src="${'https://'+data.forecast.forecastday[2].day.condition.icon}" alt=""></span>
        <div class="content text-white">
            <span class=" fs-4 fw-bold">${data.forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>C</span>
            <p class="text-secondary">20<sup>o</sup>C</p>
        </div>
        <p class="text-primary">${data.forecast.forecastday[2].day.condition.text}</p>
    </div>
</div>
</div>
`
    document.querySelector('.row').innerHTML=weather
}
