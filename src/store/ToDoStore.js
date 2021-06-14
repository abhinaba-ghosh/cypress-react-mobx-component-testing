import { observable, action, computed, makeObservable } from 'mobx';

export class ToDoStore {
    constructor() {
        makeObservable(this);
    }

    @observable items = [];

    @action
    addItem(item) {
        this.items.push(item);
    }

    @action
    deleteItem(item) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }

    @computed
    get itemsCount() {
        return this.items.length;
    }
}
