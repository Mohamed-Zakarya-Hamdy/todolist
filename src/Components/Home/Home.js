import React from 'react';
import "./Home.css";

const Home = ({ todo, getinput, addlist, clearArray }) => {
    return (
        <div className="App">
            <h2>List</h2>

            <ul>
                {todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <input ref={getinput} placeholder="Add list"></input>
            <button onClick={addlist}>Add</button>
            <button onClick={clearArray} >  Clear   </button>
        </div>
    );
};

export default Home;
