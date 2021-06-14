/* eslint-disable no-undef */
/// <reference types="cypress" />

import { mount } from '@cypress/react';
import React from 'react';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import ToDoListCounter from '../components/ToDoListCounter';
import { Provider } from 'mobx-react';
import { ToDoStore } from '../store/ToDoStore';

// Cypress has react selector plugin that can be used to fetch element using native react properties - component, props and states
// get more details here - https://github.com/abhinaba-ghosh/cypress-react-selector
describe('ToDo App integration tests', () => {
    beforeEach(() => {
        const _store = new ToDoStore();
        mount(
            <Provider store={_store}>
                <main>
                    <ToDoForm />
                    <ToDoList />
                    <ToDoListCounter />
                </main>
            </Provider>
        );
    });

    it('should create new tasks', () => {
        cy.get('input').type('Buy milk');
        cy.get('button').click();
        cy.get('input').type('Go shopping');
        cy.get('button').contains('Add').click();
        cy.get('ul').children().should('contains.text', 'Buy milk');
        cy.get('ul').children().should('contains.text', 'Go shopping');
    });

    it('should mark pending tasks to completed', () => {
        cy.get('input').type('Buy milk');
        cy.get('button').click();
        cy.get('button').contains('Mark Complete').click();
        cy.get('h1').should('contains.text', 'No Tasks in hand');
    });
});
