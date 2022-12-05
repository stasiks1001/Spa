import React ,{ useEffect} from 'react'


function Game(props) {
    useEffect(()=>{
        // This get called after every render by default
        console.log('Render...');

         // to perform unmounting just return a function here 
         // and react will call it when unmounting
         return ()=> {
             console.log('unmounting....');
         }

        // []  to perform mounting (run only one time)
    },[]);

    useEffect(() => {
        console.log(' second useEffect props change');
    }, [props.random])
    return (
        <div className="game">
          <h3> this is a game component</h3>  
          <img src="https://api.lorem.space/image/game?w=150&h=220" />
        </div>
    )
}

export default Game
