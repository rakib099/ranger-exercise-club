import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions-container'>
            <h2 className='title'>Conceptual Questions</h2>
            <div className="questions">
                <div className="question">
                    <h2>1. How does React work?</h2>
                    <p><span>Ans:</span> React creates a virtual DOM in memory instead of manipulating the browser's DOM directly. So, when something changes, it compares the actual DOM with the virtual DOM to see exactly where the update is needed. That's why it's faster because it doesn't need to rerender the whole DOM for a minor change. It compares the virtual DOM with the actual DOM using something called diff algorithm.</p>
                </div>

                <div className="question">
                    <h2>2. What else useEffect can do besides data loading from external resources?</h2>
                    <p><span>Ans:</span> The useEffect Hook allows us to perform side effects in components. Side effects are actions which are performed with the "outside world." (meaning outside your codebase)</p>
                    <p><span>Some side effects that useEffect performs:</span></p>
                    <ul>
                        <li>To interact with browser APIs (that is, to use document or window directly)</li>
                        <li>Making a request to an API for data from a backend server</li>
                        <li>Using unpredictable timing functions like setTimeout or setInterval</li>
                    </ul>
                </div>

                <div className="question">
                    <h2>3. What is the difference between Props and State?</h2>
                    <p><span>Ans:</span></p>
                    <p><span>Props:</span></p>
                    <ul>
                        <li>Props are read-only.</li>
                        <li>It is an object which stores the value of attributes of a tag.</li>
                        <li>It allows passing data from one component to other components.</li>
                        <li>Child components can access it.</li>
                    </ul>
                    <p><span>State:</span></p>
                    <ul>
                        <li>State can be changed.</li>
                        <li>State holds information about the components.</li>
                        <li>State cannot be accessed by child components.</li>
                    </ul>
                </div>

                
            </div>
        </div>
    );
};

export default Questions;