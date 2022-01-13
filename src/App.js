import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routex from './routes';

function App() {
  return (
    <div className='app'>
      <Routex />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
