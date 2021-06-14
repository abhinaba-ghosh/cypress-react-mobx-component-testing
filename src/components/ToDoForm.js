import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class ToDoForm extends React.Component {
    // const [item, setItem] = useState('');

    constructor(props) {
        super(props);
        this.state = {
            item: '',
        };
    }

    render() {
        return (
            <form
                onSubmit={(e) => {
                    this.props.store.addItem(this.state.item);
                    this.setState({ item: '' });
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    placeholder="add your tasks here..."
                    value={this.state.item}
                    onChange={(e) => {
                        this.setState({ item: e.target.value });
                    }}
                ></input>
                <button type="submit" disabled={this.state.item ? false : true}>
                    Add
                </button>
            </form>
        );
    }
}

export default ToDoForm;
