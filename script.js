async function fetchData(){
    try{
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=norwich&units=metric&appid=d2700e6f6ba228c52493fce891c9b4f8");
        const data = await response.json();

        console.log(data)
        //to get location
        const location= document.getElementById("location")
        location.innerHTML = data.name 
        //to get condition
        const condition = document.getElementById("condition")
        condition.innerHTML = data.weather[0].description
        //to get temperature
        const temperature = document.getElementById("temperature")
        temperature.innerHTML = data.main.temp + ' °C' 
        //to ger wind speed
        const wind = document.getElementById("wind")
        wind.innerHTML = 'Wind speed: ' + data.wind.speed + ' m/s'
        //to get humidity
        const humidity = document.getElementById("humidity")
        humidity.innerHTML = 'Humidity: ' + data.main.humidity + ' %'
        //to get air pressure
        const pressure = document.getElementById("pressure")
        pressure.innerHTML = 'Air pressure: ' + data.main.pressure + 'mm of Hg'
        //to get weather icon
        const icon = document.getElementById("weather-icon")
        const iconcode = data.weather[0].icon
        icon.src= `https://openweathermap.org/img/wn/${iconcode}@2x.png`
        //to get date
        var today = new Date();
        var month = today.getMonth()
        monthList = ["January","February","March","March","April","May","June","July","August","September","October","November","December"]
        var date = monthList[month] + ' ' + today.getDate() + ',' + ' ' + today.getFullYear();
        document.getElementById("displayDate").innerHTML = date;
    }
    catch(err){
        console.log("error received",err)
    }
    
}
fetchData()
const myform = document.getElementById("form")
myform.addEventListener("submit", async function(e){
    e.preventDefault();
    const search = document.getElementById("search").value
    console.log(search)
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d2700e6f6ba228c52493fce891c9b4f8`);
    const data = await response.json();

    console.log(data)
    //to get location
    const location= document.getElementById("location")
    location.innerHTML = data.name
    //to ger condition
    const condition = document.getElementById("condition")
    condition.innerHTML = data.weather[0].description
    //to get temperature
    const temperature = document.getElementById("temperature")
    temperature.innerHTML = data.main.temp + '°C'
    //to get wind speed
    const wind = document.getElementById("wind")
    wind.innerHTML = 'Wind speed: ' + data.wind.speed + 'm/s'
    //to ger humidity
    const humidity = document.getElementById("humidity")
    humidity.innerHTML = 'Humidity: ' + data.main.humidity + '%'
    //to get pressure
    const pressure = document.getElementById("pressure")
    pressure.innerHTML = 'Air pressure: ' + data.main.pressure + 'mm of Hg'
    //to get icon
    const icon = document.getElementById("weather-icon")
    const iconcode = data.weather[0].icon
    icon.src= `https://openweathermap.org/img/wn/${iconcode}@2x.png`
    //to get date
    var today = new Date();
    var month = today.getMonth()
    monthList = ["January","February","March","March","April","May","June","July","August","September","October","November","December"]
    var date = monthList[month] + ' ' + today.getDate() + ',' + ' ' + today.getFullYear();
    document.getElementById("displayDate").innerHTML = date;
})