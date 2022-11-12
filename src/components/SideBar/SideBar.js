import React from 'react';
import './SideBar.css';

const SideBar = () => {

    const breaks = [10, 20, 30, 40, 50];
    console.log();
    return (
        <div className='side-info'>
            <div className="personal-info">
                <h2>Name</h2>
            </div>
            <h4>Add a break</h4>
            <div className="break-container">
                {
                    breaks.map(b => <p>{b}</p>)
                }
            </div>
            <div className="exercise-details">
                <h4>Exercise Details</h4>
                <p className='exercise-time'>Total time: </p>
                <p>Break time: </p>
            </div>
            <button className='btn-complete'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default SideBar;