import React, { useEffect, useState } from 'react';
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
                    <h2>Ranger Exercise Club</h2>
                    <p>Today's Pics</p>
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