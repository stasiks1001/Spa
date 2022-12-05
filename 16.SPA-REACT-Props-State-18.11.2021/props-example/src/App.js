import './App.css';
import Car from './components/Car';
function App() {
  const cars = [{ brand :"BMW" ,model:"X5" ,img:"./images/bmw-x5.png" },
  { brand :"Ford" ,model:"Galaxy" ,img:"./images/ford-galaxy.jpeg" },
  { brand :"Kia" ,model:"Sportage" ,img:"./images/kia-sportage.jpg" }]
  return (
    <div className="App">
     <h1> React Props</h1> 
     { cars.map( element => <Car brand={element.brand} model={element.model} img={element.img} /> )}
     
      {/* <Car brand="BMW" model="X5" img="./images/bmw-x5.png" />
      <Car brand="Ford" model="Galaxy" img="./images/ford-galaxy.jpeg" />
      <Car brand="Kia" model="Sportage" img="./images/kia-sportage.jpg" /> */}
      
    </div>
  );
}

export default App;
