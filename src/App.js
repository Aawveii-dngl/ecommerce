import { Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Routes from './Pages/Homepage/ROUTE/Routes';

function App() {
  return (
    <div >
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
