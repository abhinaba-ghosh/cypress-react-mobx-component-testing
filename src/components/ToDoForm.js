import React, { useContext, useState } from 'react';
import { StoreContext } from '../store/ToDoStore';

const ToDoForm = () => {
    const store = useContext(StoreContext);
    const [item, setItem] = useState('');

    return (
        <form
            onSubmit={(e) => {
                store.addItem(item);
                setItem('');
                e.preventDefault();
            }}
        >
            <input
                type="text"
                placeholder="add your tasks here..."
                value={item}
                onChange={(e) => {
                    setItem(e.target.value);
                }}
            ></input>
            <button type="submit" disabled={item ? false : true}>
                Add
            </button>
        </form>
    );
};

export default ToDoForm;
