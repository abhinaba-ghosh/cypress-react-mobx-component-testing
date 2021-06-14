import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoListCounter from './components/ToDoListCounter';
import { Provider } from 'mobx-react';
import { ToDoStore } from './store/ToDoStore';

const _store = new ToDoStore();

function App() {
    return (
        <Provider store={_store}>
            <main>
                <ToDoForm />
                <ToDoList />
                <ToDoListCounter />
            </main>
        </Provider>
    );
}

export default App;
