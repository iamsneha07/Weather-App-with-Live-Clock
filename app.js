const apiKey="2b6fb7ae76311e1a9f5ca3ef7cb9e289";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

//adjusted version

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    const timeBox = document.querySelector(".time-container");
    const weatherBox = document.querySelector(".weather");

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        weatherBox.classList.remove("show");  // Just in case it was shown earlier
        timeBox.classList.remove("hidden");   // Re-show clock if user types wrong city
        return;
    }

    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".weather-icon").src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    // ✅ Hide clock, show weather after successful fetch
    document.querySelector(".error").style.display = "none";
    timeBox.classList.add("hidden");
    weatherBox.classList.add("show");
}


const fetchImg = async () => {
    const response = await fetch("https://pixabay.com/api/?key=44838088-11122b5211bf63fd3b42b1e23&q=weather&image_type=photo");
    const data = await response.json();
    console.log(data);

    const num = Math.floor(Math.random()*20);
    console.log(num)
    
    let body = document.getElementById("main");
    body.style.backgroundImage = `url(${data.hits[num].webformatURL})`;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.height = "100vh"; // Ensure full viewport height
    body.style.width = "100%";   // Ensure full width
}
fetchImg();

searchBtn.addEventListener("click",()=>{
    fetchImg();
    checkWeather(searchBox.value);
})

