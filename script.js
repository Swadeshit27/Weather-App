const update = async (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ab95fb1f19a951b062345531da0a021&units=metric`;

  let data = await fetch(url);

  let predata = await data.json();

  console.log(predata);
  const { name } = predata;
  const { icon, description } = predata.weather[0];
  const { temp, humidity } = predata.main;
  const { speed } = predata.wind;
  //   console.log(name, icon, description,temp, humidity,speed);
  document.body.style.background="url('https://source.unsplash.com/1600x900/?"+name+"')"
  document.getElementsByClassName("city")[0].innerHTML = name;
  document.getElementsByClassName("temp")[0].innerHTML = temp + "&#8451";
  document.getElementsByClassName("cloudy")[0].innerHTML = description;
  document.querySelector('.cond').src= "http://openweathermap.org/img/wn/"+icon+".png";
  document.getElementsByClassName("humadity")[0].innerHTML =
    "humidity: " + humidity+ "%";
  document.getElementsByClassName("wind")[0].innerHTML = "wind speed: " + speed + " km/h";
  
};

document.querySelector(".icon").addEventListener("click", () => {
  // console.log(document.querySelector('.search-bar').value);
  let val = document.querySelector(".search-bar").value;
  update(val);
});
document.querySelector(".search-bar").addEventListener("keyup", (event) => {
  // console.log(document.querySelector('.search-bar').value);
  if(event.key=="Enter"){
    let val = document.querySelector(".search-bar").value;
  update(val);
  }
});
