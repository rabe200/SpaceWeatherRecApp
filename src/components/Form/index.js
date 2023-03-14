export default function Form({ onAddActivity }) {
  return (
    <form>
      <h1>Space Weatherapp</h1>
      <label htmFor="activity">Activity</label>
      <input type="text" id="activity"></input>
      <label htmlFor="checkbox"></label>
      <input type="checkbox" id="checkbox"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
