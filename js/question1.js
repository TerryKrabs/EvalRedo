//These comments below are all apis that do not need auth
//7Timer! Weather forecastsapi url http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json
//Agify.io Predict age based on a name url 'https://api.agify.io?name=Jt' <= you can change the end of the url to somes name for differnt results
//Bored Activity suggestions url https://www.boredapi.com/api/activity

let result = document.getresultById("result");
let SubmitBtn = document.getresultById("SubmitBtn")

async function MagicEightBallApi() {
    // .value is converting the output into whatever it was coded as
 const promise = await fetch(`http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json`)
 const data = await promise.text();
 console.log(data);
 return data;
}
