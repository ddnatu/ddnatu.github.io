import React from 'react';
import axios from 'axios';
import moment from 'moment';

class Chatroom extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            chatObj: {},
            value: '',
            messageList: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderOlderMessages = this.renderOlderMessages.bind(this);
        this.addNewMessage = this.addNewMessage.bind(this);
    }
    componentDidMount() {
        //this.openSocket();
        this.renderOlderMessages();
    }

    renderOlderMessages() {
        let res = axios.get(
            'http://localhost:3001/getUserMessages'
        );
        res.then((values) => {
            console.log('success data render older messages', values);
            this.setState({
                messageList: values.data.messages
            });
        });
        res.catch((err) => {
            console.log('Error in newMessage post request', err);
        });
    }

    addNewMessage(params) {
        console.log('params', params, ...this.state);
        let chatObj = this.state.chatObj;
        let reqBody = chatObj;
        let res = axios.post(
            'http://localhost:3001/addNewMessage',
            reqBody
        );
        res.then((data) => {
            console.log('success data', data);
        });
        res.catch((err) => {
            console.log('Error in newMessage post request', err);
        });

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value);
        this.setState({
            chatObj: { user: this.state.user.email, message: this.state.value },
            message: this.state.value,
            timeStamp: moment.now().format('MMM D')
        });
        this.AddNewMessage();
        event.preventDefault();
    }
    render() {
        const { user, value, messageList } = this.state;
        return (
            <div>
                <div> Let{'s'} Chat </div>
                <div>
                    {messageList.map((val, index) => {
                        return (
                            <span key={index}> {val.message} </span>
                        )
                    })}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        {user.email}
                        <input type="text" value={value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;