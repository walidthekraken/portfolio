
import './App.css';
import { Navbar } from './components/Navbar';
import {Home} from './components/Home'
import {Overview} from './components/Overview'
import { useRef } from 'react';

function App() {

  const overviewRef = useRef(null);

  function handleOverviewClick(){
    overviewRef.current.scrollIntoView({ behavior: 'smooth' });
    console.log("hahahdf");
  }

  return (
    <div className="App">

      <Navbar handleOverviewClick={handleOverviewClick}/>
      <Home />
      <Overview refPass={overviewRef}/>
    </div>
  );
}

export default App;
