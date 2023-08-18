const search = document.getElementById('search');

//Temps
const tempToday = document.getElementById('tempToday');
const tempTmw = document.getElementById('tempTmw');
const tempAfterTmw = document.getElementById('tempAfterTmw');

//Conditions
const conditionToday = document.getElementById('conditionToday');
const conditionTmw = document.getElementById('conditionTmw');
const conditionAfterToday = document.getElementById('conditionAfterToday');

// Icons
const iconToday = document.querySelector('.wheater1 img');
const iconTmw = document.querySelector('.wheater2 img');
const iconAfterTmw = document.querySelector('.wheater3 img');

// Location
const locationText = document.getElementById('location');

// Days & Date
const dayToday = document.querySelector('.wheater1 .head .day');
const dayTmw = document.querySelector('.wheater2 .head .day');
const dayAfterTmw = document.querySelector('.wheater3 .head .day');

const dateToday = document.querySelector('.wheater1 .head .date');

function formatDate(date) {
  const options = { day: 'numeric', month: 'long' };
  const parts = date.toLocaleDateString('en-US', options).split(' ');
  return `${parts[1]} ${parts[0]}`;
}

const today = new Date();
const formattedDate = formatDate(today);

// API
const apiKey = '65e6c950c2ef4272b42141618231808';

// ==================================

// Input Search
search.addEventListener('input', function (e) {
  const inputValue = e.target.value;
  // console.log(inputValue);
  // getTemp(inputValue);
  getUserLocation(inputValue);
});

async function getUserLocation(inputValue) {
  console.log(inputValue);
  const res = await fetch(
    'https://api.geoapify.com/v1/ipinfo?apiKey=4578fd0e03574fd6886d60032810c1cf'
  );
  const data = await res.json();
  cityName = data.city.name;
  getTemp(inputValue ? inputValue : cityName);
}
getUserLocation();

// Change UI Data

async function getTemp(inputValue) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${
      inputValue ? inputValue : cityName
    }&days=3`
  );
  const data = await res.json();
  console.log(data);

  // Change Temps
  const dataTempToday = data.current?.temp_c;
  const dataTempTmw = data.forecast.forecastday[1].day.avgtemp_c;
  const dataTempAfterTmw = data.forecast.forecastday[2].day.avgtemp_c;

  tempToday.innerHTML = dataTempToday + '°C';
  tempTmw.innerHTML = dataTempTmw + '°C';
  tempAfterTmw.innerHTML = dataTempAfterTmw + '°C';

  // Change Conditions
  const dataCondToday = data.current.condition?.text;
  const dataCondTmw = data.forecast.forecastday[1].day.condition.text;
  const dataCondAfterTmw = data.forecast.forecastday[2].day.condition.text;

  conditionToday.innerHTML = dataCondToday;
  conditionTmw.innerHTML = dataCondTmw;
  conditionAfterToday.innerHTML = dataCondAfterTmw;

  // Change Icons
  const dataIconToday = 'https:' + data.current.condition.icon;
  const dataIconTmw =
    'https:' + data.forecast.forecastday[1].day.condition.icon;
  const dataIconAfterTmw =
    'https:' + data.forecast.forecastday[1].day.condition.icon;

  iconToday.src = dataIconToday;
  iconTmw.src = dataIconTmw;
  iconAfterTmw.src = dataIconAfterTmw;

  // Change Location
  const dataLocation = data.location.name;

  locationText.innerHTML = dataLocation;

  // Set Day & Date
  const dataDayToday = data.location.localtime;
  const dataDayTmw = data.forecast.forecastday[1].date;
  const dataDayAfterTmw = data.forecast.forecastday[2].date;

  const dateObj = new Date(dataDayToday);
  const dateObjTmw = new Date(dataDayTmw);
  const dateObjAfterTmw = new Date(dataDayAfterTmw);

  const weekdayToday = dateObj.toLocaleString('default', { weekday: 'long' });
  const weekdayTmw = dateObjTmw.toLocaleString('default', { weekday: 'long' });
  const weekdayAfterTmw = dateObjAfterTmw.toLocaleString('default', {
    weekday: 'long',
  });

  dayToday.innerHTML = weekdayToday;
  dayTmw.innerHTML = weekdayTmw;
  dayAfterTmw.innerHTML = weekdayAfterTmw;

  dateToday.innerHTML = formattedDate;
}

getTemp();
