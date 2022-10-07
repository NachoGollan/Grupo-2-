import logo from './logo.svg';
import './App.css';
import Panel from './components/Panel'
import { promiseImpl } from 'ejs';

function App() {
  return (
    <div className="App">
      <Panel total = {["Total de Productos"]} />
      <Panel total = {["Total de Ususarios"]} />
      <Panel total = {["Total de Categorias"]} />

    </div>
  );
}

export default App;
