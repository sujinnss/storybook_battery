import React from 'react';

const Hello = ({ name, big, onHello, onBye,num}) => {
    return (
        <div>
            {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
            <div><p>원하는 숫자는: {num}</p></div>
            <div>
                <button onClick={onHello}>Hello</button>
                <button onClick={onBye}>Bye</button>
            </div>
        </div>
    );
};
export default Hello;