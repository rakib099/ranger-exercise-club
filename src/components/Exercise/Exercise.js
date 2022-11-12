import React from 'react';
import './Exercise.css';

const Exercise = ({exercise}) => {
    // console.log(props)
    return (
        <div className='exercise-card'>
            <img src={exercise.img} alt="exercise-img" />
            <h4 className='exercise-title'>{exercise.title}</h4>
            <p>Duration: <span>{exercise.duration} secs</span></p>
            <button className='btn-add'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;