let today = "";
const day = new Date().getDay();
switch (day) {
  case 0:
    today = "Sunday";
    break;
  case 1:
    today = "Monday";
    break;
  case 2:
    today = "Tuesday";
    break;
  case 3:
    today = "Wednesday";
    break;
  case 4:
    today = "Thursday";
    break;
  case 5:
    today = "Friday";
    break;
  case 6:
    today = "Saturday";
    break;
}

const getYourTime = () => {
  let unix_timestamp = new Date().getTime();
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unix_timestamp);
  // Hours part from the timestamp
  let hours = "0" + date.getHours();
  // Minutes part from the timestamp
  let minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  let seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime =
    hours.substring(hours.length - 2) +
    ":" +
    minutes.substring(minutes.length - 2) +
    ":" +
    seconds.substring(seconds.length - 2);
  return formattedTime;
};

let timeInterval = setInterval(() => {
  document.querySelector(".container").innerHTML = getYourTime();
}, 1000);

let dateInterval = setInterval(() => {
  document.querySelector(".date").innerHTML = today.slice(0, 3);
}, 1000);

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("checked");
  document.querySelector("section").classList.toggle("check");
  let btnText = document.querySelector("#btn");
  btnText.innerHTML == "Light Mode"
    ? (btnText.innerHTML = "Dark Mode")
    : (btnText.innerHTML = "Light Mode");
});

// console.log(new Date().getDate()); //? ayın kaçı olduğunu söyler
// console.log(new Date().getDay()); //? günü söyler numara olarak mesela cuma için 5 yazdırır
// console.log(new Date().getFullYear()); //? yılı verir
// console.log(new Date().getHours()); //? saati
// console.log(new Date().getMilliseconds()); //? milisaniyeyi
// console.log(new Date().getMinutes()); //? dakikayı
// console.log(new Date().getMonth()); //? ayı 0-11 arasında verir yani ocak 0 şubat 1 ...
// console.log(new Date().getSeconds()); //? saniyeyi
// console.log(new Date().getTime()); //? timestamp olarak zamanı verir
// console.log(new Date().getTimezoneOffset());
// console.log(new Date().getUTCDate()); //? utc deki ayın kaç olduğunu verir
// console.log(new Date().getUTCDay()); //? utc günü sayı olarak verir
// console.log(new Date().getUTCFullYear()); //? utc deki yılı verir
// console.log(new Date().getUTCHours()); //? utc saatini
// console.log(new Date().getUTCMilliseconds()); //? utc milisaniyesini
// console.log(new Date().getUTCMinutes()); //? utc dakikasını
// console.log(new Date().getUTCMonth()); //? utc ayını verir yine 0-11 arası
// console.log(new Date().getUTCSeconds()); //? utc saniyesini
