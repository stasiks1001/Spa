// Main with big M is functional component
function Main(){
    return (
        <div className="main">
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt labore doloremque saepe modi nemo reprehenderit?</p>
            <img src="https://picsum.photos/200/300" />

        </div>
    )

}

const header = <div className ="header">
                 <h1> React Header Component</h1>
                 <h2> </h2>
              </div>

// JSX need parent element like : <div>
// to add variables to jsx we should use { }

function  Footer() {
    return (
        <div className="footer">
            <h2> this is the footer component</h2>

        </div>
    )
    
}
ReactDOM.render(<div> 
                    {header} 
                    <Main /> 
                    <Footer />
               </div>,
    document.querySelector('#root'));

