import React from 'react';
import './Exercise.css';

const Exercise = ({exercise, handleAddToList}) => {
    const {img, title, duration} = exercise;
    return (
        <div className='exercise-card'>
            <img src={img} alt="exercise-img" />
            <h4 className='exercise-title'>{title}</h4>
            <p>Duration: <span>{duration} secs</span></p>
            <button onClick={() => handleAddToList(duration)} className='btn-add'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;