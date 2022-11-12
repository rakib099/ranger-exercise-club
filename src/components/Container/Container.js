import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Container.css';

const Container = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, []);

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
                        />)
                    }
                </div>
            </div>
            <div className='side-bar'>
                <h2>Side Bar</h2>
            </div>
        </div>
    );
};

export default Container;