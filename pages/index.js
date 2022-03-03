import React, {useState} from 'react';


function HomePage(){
    const [counter, setCounter] = useState(0);

    return <div>
        <p className="counterText">{counter}</p>
        <button 
            className="counterButton" 
            type={'button'} 
            onClick={() => setCounter((counter + 1))}
        >Increase</button>
    </div>
}

export default HomePage