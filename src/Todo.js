import React, { useState } from 'react';
import './Todo.css';

function Todo() {
    const [list, setList] = useState([
        { }
    ]);

    const [task, setTask] = useState('');

    const Add = () => {
        if (task.trim() === '') return; 
        const newObj = { id: list.length + 1, task: task, done: false };
        setList(prevList => prevList.concat(newObj));
        setTask('');
    };

    const Update = (id) => {
        const newList = list.map(l => (
            l.id === id ? { ...l, done: !l.done } : l
        ));
        setList(newList);
    };

    const Remove = (id) => {
        const newList = list.filter(f => f.id !== id);
        setList(newList);
    };

    return (
        <div className='container'>
            <div className='inputPart'>
                <h2>My Todo App</h2>
                <input 
                    type='text' 
                    placeholder='Add Task' 
                    value={task} 
                    onChange={e => setTask(e.target.value)} 
                />
                <button className='addButton' onClick={Add}>Add</button>
            </div>

            <div className='taskList'>
                <ul>
                    {list.map(l => (
                        <li key={l.id} className=''>
                            <span 
                                onClick={() => Update(l.id)} 
                                className={l.done ? "done" : ""}
                            >
                                {l.task}
                            </span>
                            <span onClick={() => Remove(l.id)}>x</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
