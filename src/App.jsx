import "./App.css";
import { BaseButton } from "./components/ui/button/BaseButton";
import { BaseGoogleBt } from "./components/ui/button/BaseGoogleBt"

function App() {
  return (
    <>
      <div>
        <BaseButton name={"Подробнее"} withIcon iconType="right" />
      </div>
        <BaseGoogleBt name={"Войти через Google"} />
    </>
  );
}

export default App;
