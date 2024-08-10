import './App.css';
import Main from './components/Main';
import NoteState from './context/notes/NoteState';


function App() {

  return (
    <div className='h-full'>
      <NoteState>
        <Main/>
      </NoteState>
    </div>
  );
}

export default App;
