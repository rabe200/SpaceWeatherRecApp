import Form from "./components/Form/index";
import { useState } from "react";
import { uid } from "uid";
function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(), ...newActivity }]);
    console.log(activities);
  }

  return <Form onAddActivity={handleAddActivity} />;
}

export default App;
