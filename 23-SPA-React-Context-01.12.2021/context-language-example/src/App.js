import './App.css';
import {useState} from 'react';
import Products from './components/Products'
import NavBar from './components/NavBar';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Login from './components/Login';
import LanguageContext from './context/LanguageContext';

function App() {
  const [ lang , setLang] = useState('En')
  
  return (
    <div className="App">
      <LanguageContext.Provider value={{ lang , setLang}} >
        <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home" >
            <h2 className="mt-5">   Home component </h2>
            
          </Route>
          <Route  path="/about" >
            <h2 className="mt-5"> About component </h2>
          </Route>
          <Route  path="/contact" >
            <h2 className="mt-5"> contact Page </h2>
          </Route>
          <Route  path="/products/:productName/"    >
            <Products />
          </Route>
          
          <Route  path="/login" >
            <Login />
          </Route>
        </Switch>
        </Router>
      </LanguageContext.Provider>
       
       {/* <h1> React Bootstrap</h1>      */}
    </div>
  );
}

export default App;
