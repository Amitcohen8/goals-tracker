import logo from './logo.svg';
import './App.css';
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs';
import Calendar from './components/Calendar/Calendar';

function App() {
  return (
    <div className="App" >
    <BreadCrumbs/>
    
    <Calendar/>
    </div>
  );
}

export default App;
