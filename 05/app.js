import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: 'dsadsadas',
    }

    changeText = (content) => {
        this.setState({
            text: content,
        })
    }

    render() {
        const { text } = this.state;
        return (
            <Textarea handleChange={this.changeText} content={ text } />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));