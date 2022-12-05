import './App.css';
import PersonForm from './components/PersonForm';
import PersonView from './components/PersonView';
function App() {
  return (
    <div className="App">
     <h1> useReducer Person Data</h1>  
      <PersonForm />   
      <PersonView />   
    </div>
  );
}

export default App;
