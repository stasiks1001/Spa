import './App.css';
import Todo from './components/Todo';
function App() {
  const data = [  { id:1 , title :" learn react" , done:true},
                  { id:2 , title :" learn testing lib" , done:false},
                  { id:3 , title :" learn backend" , done:false}
  ]
  return (
    <div className="App">
      <h1>this is Testing example</h1>
      <p style={{color:"blue"}} data-testid="main-p"> this is paragraph with test id</p>
      <button data-testid="color-btn" > lightgreen </button>
     
      { data.map( item => <Todo todo = {item} key={item.id} />)}
    </div>
  );
}

export default App;
