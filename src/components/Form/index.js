export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const weatherCheck = {
      name: data.name,
      isForGoodWeather: data.isForGoodWeather.checked,
    };
    onAddActivity(weatherCheck);

    event.target.reset();
    event.target.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Space Weatherapp</h1>
      <label htmlFor="activity">Activity</label>
      <input type="text" id="activity" name="activtiy"></input>
      <label htmlFor="checkbox"></label>
      <input type="checkbox" id="checkbox" name="isForGoodWeather"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
