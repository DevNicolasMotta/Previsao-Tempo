const key = "654ca6cbf43049288abddf899bb70af6";

function DataOnScreen(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name  
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".forecast-text").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade " + data.main.humidity + "%"
    document.querySelector(".forecast-img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    
}

async function SearchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    DataOnScreen(data)
}


function ClickButton() {
    const city = document.querySelector(".input-city").value;
    SearchCity(city);
}


