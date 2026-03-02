
import './App.css';
import { openModal,openModalAccount}  from './components/openModal';


function App() {

  function handleOpenModal() {
    openModal()
  }
   function handleOpenModal2() {
    openModalAccount()
  }
  return (
    <div className="App">
      <button onClick={handleOpenModal}> Settings </button>
      <button onClick={handleOpenModal2}> Tu Cuenta </button>
    </div>
  );
}

export default App;
