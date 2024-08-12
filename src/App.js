import './App.css';
import EditModal from './components/EditModal';
import Logregis from './components/Logregis';
import Main from './components/Main';
import Modal from './components/Modal';
import NoteState from './context/notes/NoteState';


function App() {

  return (
    <div className='h-full'>
      <NoteState>
        <Main/>
        <Modal/>
        <EditModal/>
        {/* <Logregis/> */}
      </NoteState>
    </div>
  );
}

export default App;
