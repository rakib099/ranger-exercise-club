import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import Exercise from '../Exercise/Exercise';
import SideBar from '../SideBar/SideBar';
import './Container.css';

const Container = () => {
    const [exercises, setExercises] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, []);

    const handleAddToList = (duration) => {
        const newTime = [...time, duration];
        setTime(newTime);
    }

    return (
        <div className='container'>
            <div className='main'>
                <header>
                    <div className="heading">
                        <img src={logo} alt="" />
                        <h2>Ranger Exercise Club</h2>
                    </div>
                    <p><span>Today's Pick for you</span> (Add to list to get started)</p>
                </header>
                <div className="exercises-container">
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            handleAddToList={handleAddToList}
                        />)
                    }
                </div>
            </div>
            <div className='side-bar'>
                <SideBar time={time} />
            </div>
        </div>
    );
};

export default Container;