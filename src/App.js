import './App.css';
import Editor from './components/Editor.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='main-container'>
      <div className='side' ><Sidebar /></div>
      <div className='nav'><Navbar /></div>
      <div className='editor'><Editor /></div>
    </div>
  );
}

export default App;