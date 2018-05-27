import React, {Component} from 'react';
import ChatEntitySection  from '../chatEntitySection/chatEntitySection';
import {avatarImages}     from '../../config/avatar';
import './style.css';

class ChatContainer extends Component {

  componentWillMount() {
    this.props.actions.getUsernameFromLocalStorage();
  }

  render() {
    return (
      <div className="chatbot-container">
        <div className="chat-content" id="chat">
          {this.props.data && this.props.data.chatList.map((item, index) => {
            return (
              <ChatEntitySection key={index} {...item} avatarImg={avatarImages[item.entityName]}/>
            );
          })}
        </div>
      </div>
    );
  }
}


export default ChatContainer;