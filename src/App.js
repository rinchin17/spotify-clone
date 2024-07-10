import logo from './logo.svg';
import './App.css';
import Left from './components/sidebar/SideBar';
import Main from './components/main/Main';
import Right from './components/rightpane/RightPane';
import './styles/main.css'

function App() {
  return (
    <div className='container'> 
      <Left />
      <Main />
      <Right />
    </div>
  );
}

export default App;
