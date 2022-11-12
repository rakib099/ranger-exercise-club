import React from 'react';
import './Exercise.css';

const Exercise = ({exercise}) => {
    // console.log(props)
    return (
        <div className='exercise-card'>
            <img src={exercise.img} alt="exercise-img" />
            <h4 className='exercise-title'>{exercise.title}</h4>
            <p>Duration: </p>
        </div>
    );
};

export default Exercise;