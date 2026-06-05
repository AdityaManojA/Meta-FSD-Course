import Footer from './components/Footer';
import Heading from './components/Header'
import ModeToggle from './components/Toggle';
import CurrentMessage from "./components/CurrentMessage";

function App() {
  
const currentDayNumber = new Date().getDay();
  return (
  <div>

    <h1>Welcome,</h1>

    <Heading firstname="Aditya"/>  
    <CurrentMessage day={currentDayNumber} />

    <ModeToggle/>

    


  </div>
  );
};

export default App
