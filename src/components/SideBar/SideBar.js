import React, { useEffect, useState } from 'react';
import pic from '../../images/personal-pic.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addBreakTimeToDb, getItemFromDb } from '../../utilities/fakeDb';
import './SideBar.css';

const SideBar = ({ time }) => {
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const storedBreakTime = getItemFromDb('breakTime');
        setBreakTime(storedBreakTime);
    }, []);


    const breaks = [
        { key: 1, time: 10 },
        { key: 2, time: 20 },
        { key: 3, time: 30 },
        { key: 4, time: 40 }
    ];

    const totalTime = time.reduce((previous, current) => {
        return previous + current;
    }, 0);
    // console.log(totalTime)

    const handleAddBreak = (breakTime) => {
        setBreakTime(breakTime);
        addBreakTimeToDb(breakTime);
    }

    const notify = () => {
        toast.success("Congratulations you are done!!!", {
            position: toast.POSITION.TOP_CENTER
        })
    }

    return (
        <div className='side-info'>
            <div className="personal-details">
                <div className="personal-info">
                    <img src={pic} alt="" />
                    <div className='personal-title'>
                        <h3>Rakib Un Nabi</h3>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <h3>Add a break</h3>
            <div className="break-container">
                {
                    breaks.map(b => <p
                        onClick={() => handleAddBreak(b.time)}
                        key={b.key}
                    >{b.time}</p>)
                }
            </div>
            <div className="exercise-details">
                <h3>Exercise Details</h3>
                <p className='exercise-time'>Total time: <span>{totalTime} seconds</span></p>
                <p>Break time: <span>{breakTime} seconds</span></p>
            </div>
            <button onClick={notify} className='btn-complete'>
                <p>Activity Completed</p>
            </button>
            <ToastContainer />
        </div>
    );
};

export default SideBar;