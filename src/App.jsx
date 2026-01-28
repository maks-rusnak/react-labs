import Button from "./components/Button";
import CounterWithToggle from "./components/CounterWithToggle";
import ListAdder from "./components/ListAdder";

const App = () => {

  return (
    <>
      <div>
        <Button title="Вы должны увидеть этот текст при наведении на кнопку">Кнопка</Button>
        <Button title="Это уже другая кнопка">Это уже другая кнопка</Button>

        <CounterWithToggle />

        <ListAdder />
      </div>
    </> 
  )
}

export default App;
