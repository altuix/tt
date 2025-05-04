import "./styles.scss";
import { Exercise1 } from "./exercises/Exercise1";
import { Exercise2 } from "./exercises/Exercise2";

export default function App() {
  return (
    <div className="App">
      <header>
        <h3>Joyn Coding Exercise</h3>
      </header>
      <main>
        <Exercise1 />
      </main>
    </div>
  );
}
