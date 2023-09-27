import './Counter.css';

const Counter =()=>{


    return (
        <div className = 'counter'>
            <h1>REDUX COUNTER</h1>
            <div className="counter-value">-- COUNTER VALUE --</div>
            <button className="counter-button">Toggle Counter</button>
        </div>
    )
};

export default Counter;