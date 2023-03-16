function Header({ isGoodWeather }) {
  console.log(isGoodWeather);
  return (
    <h1>{isGoodWeather ? "isGoodWeatherDoThat" : "IsNoGoodWeatherDoThat"}</h1>
  );
}

export default Header;
