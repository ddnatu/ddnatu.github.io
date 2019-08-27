import React from 'react';
import axios from 'axios';
import moment from 'moment';
import './../styles/chatroom.scss';
import chatbackdropImage from './../../assets/chatroomBackdrop1.jpg';

const chatroomBackdropImage = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${chatbackdropImage})`,
    /* Center and scale the image nicely */
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
};


const URL = 'ws://localhost:1994'

class Chatroom extends React.Component {
    ws = new WebSocket(URL)

    constructor(props) {
        super(props);
        this.scrollChatRef = React.createRef()   // Create a ref object 

        this.state = {
            user: this.props.user,
            chatObj: {},
            value: '',
            messageList: [],
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderOlderMessages = this.renderOlderMessages.bind(this);
        this.addNewMessage = this.addNewMessage.bind(this);
    }

    scrollToMyRef = () => {
        window.scrollTo(0, this.scrollChatRef.current.offsetTop)
    }

    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            let x = this.state.messageList;
            x ? x.push(JSON.parse(evt.data)) : [JSON.parse(evt.data)];
            this.setState({
                messageList: x,
                value: ''
            });
        }

        this.ws.onclose = () => {
            console.log('disconnected')
        }

        this.renderOlderMessages();
    }

    renderOlderMessages() {
        let res = axios.get(
            'http://localhost:3001/getUserMessages'
        );
        res.then((values) => {
            this.setState({
                messageList: values.data.messages
            });
            this.scrollToMyRef();
        });
        res.catch((err) => {
            console.log('Error in newMessage post request', err);
        });
    }

    isOpen(ws) { return ws.readyState === ws.OPEN }

    addNewMessage(chatObj) {
        let reqBody = chatObj;
        var headers = {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        }
        let res = axios.post(
            'http://localhost:3001/addNewMessage',
            reqBody,
            { headers: headers }
        );
        res.then(() => {

            //this.ws.send(JSON.stringify(chatObj))
            let jMessage = JSON.stringify(chatObj);
            this.send = (message, callback) => {
                this.waitForConnection(() => {
                    this.ws.send(message);
                    if (typeof callback !== 'undefined') {
                        callback();
                    }
                }, 1000);
            };
            this.waitForConnection = function (callback, interval) {
                if (this.ws.readyState === 1) {
                    callback();
                } else {
                    var that = this;
                    // optional: implement backoff for interval here
                    this.ws = new WebSocket(URL);
                    this.ws.onopen = () => {
                        console.log('connected again');
                    }
                    setTimeout(function () {
                        that.waitForConnection(callback, interval);
                    }, interval);
                }
            };
            this.send(jMessage, () => {
                this.ws.onmessage = evt => {
                    console.log('evt', evt);
                }
            });

            let x = this.state.messageList;
            x ? x.push(chatObj) : [chatObj];
            this.setState({
                messageList: x,
                value: ''
            });
            this.scrollToMyRef();
        });
        res.catch((err) => {
            console.log('Error in newMessage post request', err);
        });

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        let chatObj = {
            user: this.state.user.email,
            message: this.state.value,
            message_date: moment.now().valueOf(),
            message_timezone: "Asia/Kolkata"
        }
        this.addNewMessage(chatObj);
        event.preventDefault();
    }

    render() {
        const { user, value, messageList } = this.state;
        return (
            <div className="chatroomContainer">
                <div style={chatroomBackdropImage} alt="chatImage">
                    <div className="">
                        {messageList.map((val, index) => {
                            return (
                                <div className="messageListContainer" key={index}>
                                    <div className="chatUser"> <div className="chatUserContent">{val.user}</div></div>
                                    <div className="talk-bubble tri-right left-top">
                                        <div className="talkText">{val.message}</div>
                                        <div className="textTimestamp"> {moment(val.message_date).format("MMM D HH:SS")} </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div ref={this.scrollChatRef} className="formChatContainer">
                        <form className="formChatroom" onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="chatInputContainer">
                                <div className="chatAccountLabel">
                                    {user.email}
                                </div>
                                <div className="chatAccountInputTextContainer">
                                    <input className="chatAccountInputText" type="text" value={value} onChange={(e) => this.handleChange(e)} />
                                </div>
                            </div>
                            <div className="submitChatButtonContainer"><input className="submitChatButton" type="submit" value="Submit" /></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chatroom;

