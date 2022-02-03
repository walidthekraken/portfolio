
import './App.css';
import { Navbar } from './components/Navbar';
import {Home} from './components/Home'
import {Overview} from './components/Overview'
import { useRef } from 'react';
import { Contact } from './components/Contact';

function App() {

  const overviewRef = useRef(null);
  const contactRef = useRef(null);

  function handleOverviewClick(){
    overviewRef.current.scrollIntoView({ behavior: 'smooth' });
    console.log("hahahdf");
  }
  function handleContactClick(){
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
    console.log("hahahdf");
  }

  return (
    <div className="App">

      <Navbar handleOverviewClick={handleOverviewClick} handleContactClick={handleContactClick}/>
      <Home />
      <Overview refPass={overviewRef}/>
      <Contact refPass={contactRef}></Contact>
    </div>
  );
}

export default App;
