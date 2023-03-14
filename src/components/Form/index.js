export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newTask = {
      name: data.name,
      isForGoodWeather: data.isForGoodWeather,
    };
    onAddActivity(newTask);

    event.target.reset();
    event.target.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Space Weatherapp</h1>
      <label htmlFor="name">Activity</label>
      <input type="text" id="name" name="name"></input>
      <label htmlFor="isForGoodWeather"></label>
      <input
        type="checkbox"
        id="isForGoodWeather"
        name="isForGoodWeather"
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}
