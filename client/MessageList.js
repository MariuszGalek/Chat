import React, {Component} from 'react';
import styles from './MessageList.css';


class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newText: this.props.text
        };
    }

    render() {
        return (
            <div>
                <div className={styles.Message}>
                    <strong>{this.props.from} : </strong>
                    <span className={styles.text}>{this.props.text}</span>
                </div>
            </div>
        );
    }
};

const MessageList = props => (
    <div className={styles.MessageList}>
        {
            props.messages.map((message, i) => {
                return (
                    <Message
                        key={i}
                        from={message.from}
                        text={message.text}
                    />
                );
            })
        }
    </div>
);

export default MessageList;