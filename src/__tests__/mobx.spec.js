/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect-in-promise */
/// <reference types="cypress" />

import { mount } from '@cypress/react';
import React from 'react';
import ToDoList from '../components/ToDoList';
import ToDoListCounter from '../components/ToDoListCounter';
import { Provider } from 'mobx-react';
import { ToDoStore } from '../store/ToDoStore';

describe('MobX store tests', () => {
    beforeEach(() => {
        const _store = new ToDoStore();
        mount(
            <Provider store={_store}>
                <main>
                    <ToDoList />
                    <ToDoListCounter />
                </main>
            </Provider>
        );

        if (window.Cypress) {
            window.store = _store;
        }
    });

    it('should add item to mobx store', () => {
        cy.window()
            .its('store')
            .invoke('addItem', 'Buy milk');
        cy.get('ul')
            .children()
            .should('contains.text', 'Buy milk');
    });

    it('should inject items to mobx store manipulating items array', () => {
        cy.window()
            .its('store.items')
            .as('items')
            .get('@items')
            .then((item) => item.push('Buy milk'));
        cy.get('ul')
            .children()
            .should('contains.text', 'Buy milk');
    });

    it('should delete an item from mobx store', () => {
        cy.window()
            .its('store')
            .invoke('addItem', 'Buy milk');
        cy.get('ul')
            .children()
            .should('contains.text', 'Buy milk');

        cy.window()
            .its('store')
            .invoke('deleteItem', 'Buy milk');
        cy.get('h1').should('contains.text', 'No Tasks in hand');
    });

    it('should get real-time items count from mobx store', () => {
        cy.window()
            .its('store')
            .invoke('addItem', 'Buy milk');
        cy.window()
            .its('store')
            .invoke('addItem', 'Go shopping');

        cy.window()
            .its('store')
            .its('itemsCount')
            .should('eq', 2);
    });
});
