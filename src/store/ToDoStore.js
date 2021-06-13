import { useLocalObservable } from 'mobx-react';
import { createContext } from 'react';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const store = useLocalObservable(() => ({
        items: [],
        addItem(item) {
            store.items.push(item);
        },

        deleteItem(item) {
            const index = store.items.indexOf(item);
            store.items.splice(index, 1);
        },
        get itemsCount() {
            return store.items.length;
        },
    }));

    if (window.Cypress) {
        window.store = store;
    }

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

export default StoreProvider;
