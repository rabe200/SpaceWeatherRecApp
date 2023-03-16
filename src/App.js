import Form from "./components/Form/index";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./components/List/Index";
import Header from "./components/Header/Header";

function App() {
  const isGoodWeather = true;

  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );
  console.log(filteredActivities);
  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
  }

  return (
    <>
      <Header isGoodWeather={isGoodWeather} />
      <ul>
        <List activities={filteredActivities} />
      </ul>
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
