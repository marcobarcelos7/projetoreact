import {Title} from './components/Title/index'
import {Button} from './components/Button/index'
import { Greeting } from './components/Greeting';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className='App'>
    <Title text={"Boas vindas!"} />
    <Title text={"Página inicial"} />
    <Greeting name={"Rat"} />
    <Greeting name={"Marco"} />
    <Button label={"Enviar"} />
    </div>
  )
}

export default App;
