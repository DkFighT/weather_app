let API_KEY = '0b0d4fdcd56415cd74791bf5420bef2c';

let btn = document.getElementById('search');
btn.style.minWidth = btn.clientHeight + 'px';
let search = document.getElementById('search_field')

let container = document.getElementById('main_container');

let icon_url = `https://openweathermap.org/img/wn/${search}@2x.png`;

btn.onclick = () => {
    if (search.value !== '') {
        container.style.height = '450px';
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${search.value}&appid=${API_KEY}`;
        getRequest(url).then(data => {
            if (data['cod'] !== '200') {
                container.insertAdjacentHTML('beforeend', `<div class="info"><div class="tempreture"><div class="temp" id="temp">Invalid <br>City</div></div></div>`)
            }
            else {
                container.lastChild.remove()
                search.value = search.value + `, ${data['city']['country']}`;
                container.insertAdjacentHTML('beforeend', `
                <div class="info" id="info">
                    <div class="tempreture">
                        <div class="temp" id="temp">${parseInt(data['list'][0]['main']["temp"]) - 273}°C</div>
                        <img class="icon" id="icon" src="https://openweathermap.org/img/wn/${data['list'][0]['weather'][0]['icon']}@2x.png">
                    </div>
                    <div class="description">${data['list'][0]['weather'][0]['description']}</div>
                    <div class="wind_info">
                        <div class="wind" id="wind">${data['list'][0]['wind']['speed']}m/s
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
                        <div class="watery" id="watery">${data['list'][0]['main']['humidity']}%
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-droplet" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                            <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
                            </svg>
                        </div>
                        <div class="bar" id="bar">${data['list'][0]['main']['pressure']}hPa
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
                            <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
                            <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"/>
                            </svg>
                        </div>
                    </div>
                    <div class="wind_info sunset">
                        <div class="wind">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sunrise" viewBox="0 0 16 16">
                            <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            ${(new Date(parseInt(data['city']['sunrise'], 10) * 1000)).getHours()}:${(new Date(parseInt(data['city']['sunrise'], 10) * 1000)).getMinutes()}
                        </div>
                    
                        <div class="wind">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sunset" viewBox="0 0 16 16">
                            <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            ${(new Date(parseInt(data['city']['sunset'], 10) * 1000)).getHours()}:${(new Date(parseInt(data['city']['sunset'], 10) * 1000)).getMinutes()}
                        </div>
                    </div>
                    <div class="time_weather" id="time_weather">
                        <div class="block">
                            <div class="temp_min_time">Now</div>
                            <img src="https://openweathermap.org/img/wn/${data['list'][0]['weather'][0]['icon']}@2x.png" alt="" class="temp_min_ico">
                            <div class="temp_min_temp">${parseInt(data['list'][0]['main']["temp"]) - 273}°C</div>
                        </div>
                    </div>
                </div>`)
                let time_weather = document.getElementById('time_weather');
                time_weather.style.transform = `rotate(-90deg) translateY(-${(time_weather.clientHeight) / 2 + 50}px)`;
                for (let i = 1; i < data['list'].length; i++){
                    time_weather.insertAdjacentHTML('beforeend', `<div class="block">
                    <div class="temp_min_time">${((data['list'][i]['dt_txt']).split(' '))[1].replace(':00','')}</div>
                    <img src="https://openweathermap.org/img/wn/${data['list'][i]['weather'][0]['icon']}@2x.png" alt="" class="temp_min_ico">
                    <div class="temp_min_temp">${parseInt(data['list'][i]['main']["temp"]) - 273}°C</div>
                </div>`)
                }
            }
        })
    }
    else {
        container.style.height = '100px';
        try {
            document.getElementById('info').remove()
        } catch (error) {
            console.log('deleted');
        }
    }
}

function getRequest(url) {
    return fetch(url).then(response => { return response.json(); });
}