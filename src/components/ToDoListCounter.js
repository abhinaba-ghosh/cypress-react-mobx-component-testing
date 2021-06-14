import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class ToDoListCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.store.itemsCount === 0) {
            return <h1>No Tasks in hand...</h1>;
        }

        return (
            <h1>
                You Have {this.props.store.itemsCount}{' '}
                {this.props.store.itemsCount > 1 ? `Tasks` : `Task`}!
            </h1>
        );
    }
}

export default ToDoListCounter;
