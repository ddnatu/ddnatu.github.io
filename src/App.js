import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Begur Valay IT Milan'
        }
    }

    render() {
        return (
            <div>Hello</div>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root'));