import { useObserver } from 'mobx-react';
import React, { useContext } from 'react';
import { StoreContext } from '../store/ToDoStore';

const ToDoList = () => {
    const store = useContext(StoreContext);

    return useObserver(() => (
        <ul>
            {store.items.map((item) => (
                <li key={item}>
                    {item}{' '}
                    <button
                        onClick={(e) => {
                            store.deleteItem(item);
                        }}
                    >
                        Mark Complete
                    </button>
                </li>
            ))}
        </ul>
    ));
};

export default ToDoList;
