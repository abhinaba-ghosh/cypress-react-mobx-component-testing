import React from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import ToDoListCounter from './components/ToDoListCounter';
import StoreProvider from './store/ToDoStore';

function App() {
    return (
        <StoreProvider>
            <main>
                <ToDoForm />
                <ToDoList />
                <ToDoListCounter />
            </main>
        </StoreProvider>
    );
}

export default App;
