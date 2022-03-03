import React, {useState, Fragment} from 'react';


function HomePage(){
    const [counter, setCounter] = useState(0);

    return <Fragment>
        <div className="contactList"></div>
        <div className="chatGifted"></div>
    </Fragment>
}

export default HomePage