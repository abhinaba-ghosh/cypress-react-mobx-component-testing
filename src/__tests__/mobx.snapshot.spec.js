/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect-in-promise */
/// <reference types="cypress" />

import { mount } from '@cypress/react';
import React from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import ToDoListCounter from '../components/ToDoListCounter';
import { Provider } from 'mobx-react';
import { ToDoStore } from '../store/ToDoStore';

describe('MobX store snapshot tests', () => {
    beforeEach(() => {
        const store = new ToDoStore();
        mount(
            <Provider store={store}>
                <main>
                    <ToDoForm />
                    <ToDoList />
                    <ToDoListCounter />
                </main>
            </Provider>
        );

        if (window.Cypress) {
            window.store = store;
        }
    });

    it('should snapshot test the mobx store', () => {
        const getStore = () => cy.window().its('store');
        getStore().invoke('addItem', 'Buy milk');
        getStore().invoke('addItem', 'Go shopping');

        // before snapshot test
        getStore()
            .its('getItemDetails')
            .should('have.keys', ['name', 'items']);

        // after snapshot tests
        getStore()
            .its('getItemDetails')
            .then(Object.keys)
            .toMatchSnapshot();
    });
});
