import "./App.css";
import { BaseButton } from "./components/ui/button/BaseButton";

function App() {
  return (
    <div>
      <BaseButton name={"Подробнее"} withIcon iconType="right" />
    </div>
  );
}

export default App;
