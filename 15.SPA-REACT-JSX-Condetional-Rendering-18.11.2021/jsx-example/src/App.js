import './App.css';

function App() {
  const name = "Max";
  const age = 37;
  const nums = [1,2,3,4];
  const skills = ["php","nodejs","react","javascript","html","css"];
  const skillsJsx = [<h6>php </h6>,<h6>nodejs</h6>,<h6>react</h6>,<h6>javascript</h6>,<h6>html</h6>,<h6>css</h6>];
  const person = { name : "Anna" , city:"Berlin" }
  function greet(){
    return "Hello World"
  }
  const noValue = undefined;
  const nullValue = null;
  const booleanValue = false;
  const isLoggedin = true;
  const theme = 'blue';
  

  return (
    
    <div className={`App ${theme === "blue" ? "blueStyle" : "greenStyle"}  `}>
     <h1> React JSX</h1>
     <p> Hello {name}</p> 
     <p>{name.toUpperCase()} is {age} years old</p>
     <p>{nums}  </p>
     <p>{skills} </p>
     {/* // comment */}
    {/* <p>{skillsJsx} </p> */}
    {skills.map(item =>  <h3>{item}</h3>      )}
    <p>{person.city}</p>
    <p>function call :  {greet()}</p>
    <p>noValue : {noValue}</p>
    <p>nullValue : {nullValue}</p>
    <p>booleanValue: {booleanValue}</p>
    {/* using and operator */}
    <p>{isLoggedin && "you are logged in "}</p>
    <p>{ age > 18 && "you can drive" }</p>
    <p>{person.name} {!person.job && " is not working" }</p>
    <p>{person.skills && person.skills.map(item => <h2>{item}</h2>)}</p>
    {/* using ternary operator */}
    <p>{person.skills ? person.skills.map(item => <h2>{item}</h2>) : " no programming skills yet" }</p>
    { false && <p> this is false and will be ignored</p>}
    { true && <p> this is true and will be rendered</p>}
    { age >= 18 ? "can drive" : "need to wait for driving!"}



    </div>
  );
}

export default App;
