import Button from "./components/Button";
import CounterWithToggle from "./components/CounterWithToggle";

const App = () => {

  return (
    <>
      <div>
        <Button title="Вы должны увидеть этот текст при наведении на кнопку">Кнопка</Button>
        <Button title="Это уже другая кнопка">Это уже другая кнопка</Button>

        <CounterWithToggle />
      </div>
    </> 
  )
}

export default App;
