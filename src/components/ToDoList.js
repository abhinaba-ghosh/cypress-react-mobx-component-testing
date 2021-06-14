import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.store.items.map((item) => (
                    <li key={item}>
                        {item}{' '}
                        <button
                            onClick={(e) => {
                                this.props.store.deleteItem(item);
                            }}
                        >
                            Mark Complete
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}

export default ToDoList;
