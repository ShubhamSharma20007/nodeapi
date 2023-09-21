const btn = document.querySelector(".btn");
const city = document.querySelector(".iptval");

const Fun = async (event) => {
  event.preventDefault();
  var cityval = city.value;
  if (cityval === "") {
    city.innerText = "This fill the value first";
  } else {
    try {
      const api =
        `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=4a5e6e059e6b21cfc989097e243bdc2a`;
      const raw = await fetch(api);
      const res = await raw.json();
      console.log(res);
    } catch (error) {}
  }
};

btn.addEventListener("click", Fun);
