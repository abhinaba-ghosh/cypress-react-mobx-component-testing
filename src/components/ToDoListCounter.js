import { useObserver } from 'mobx-react';
import React, { useContext } from 'react';
import { StoreContext } from '../store/ToDoStore';

const ToDoListCounter = () => {
    const store = useContext(StoreContext);

    return useObserver(() => {
        if (store.itemsCount === 0) {
            return <h1>No Tasks in hand...</h1>;
        }

        return (
            <h1>
                You Have {store.itemsCount}{' '}
                {store.itemsCount > 1 ? `Tasks` : `Task`}!
            </h1>
        );
    });
};

export default ToDoListCounter;
