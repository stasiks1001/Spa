import './App.css';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
function App() {
  return (
    <div className="container-fluid App">
     <Navbar />
     <h1> React Intro</h1>     
     <Alerts />
    </div>
  );
}

export default App;
