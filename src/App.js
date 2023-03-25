import './App.css';
import { FaPlusCircle, FaRegCircle, FaTrashAlt, FaRegSmileBeam } from "react-icons/fa";

function App() {
  return (
    <div className='container-app'>
      <div className='profile'>
        <div id='date'>Jueves 23 de marzo</div>
        <h1>Hola! <FaRegSmileBeam className='smile'/></h1>
        <span>Vamos a cumplir nuestras metas!</span>
      </div>
      <div className='add-task'>
        <input type='text' id='input' placeholder='Add a task'/>
        <FaPlusCircle id='enter'/>
      </div>
      <div className='task-section'>
        <h3>Estas son tus tareas pendientes.</h3>
        <ul id='list'>
          <li>
            <FaRegCircle className='icons' data='done' id='0'/>
            <p className='text'>hola</p>
            <FaTrashAlt className='icons' data='deleted' id='0'/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
