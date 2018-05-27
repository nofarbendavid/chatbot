import React, {Component}          from 'react';
import ChatBubble                  from '../chatBubble/chatBubble';
import {FormattedMessage}          from 'react-intl';
import {ENTITY_NAME, RENDER_DELAY} from '../../config/constants';
import './style.css';



class ChatEntitySection extends Component {


  _generateText = (text, entityName) => {
    return (entityName === ENTITY_NAME.USER) ? text : <FormattedMessage id={text.id} values={{value: text.value}}/> ;
  }

  render() {
    const entityName = this.props.entityName;

    return (
      <div className={'chat-entity-section ' + entityName}>
        <div className="avatar-wrapper">
          <img className="avatar-img" src={this.props.avatarImg} alt="avatar" />
        </div>
        <div className="bubbles-container">
          {this.props.text && this.props.text.map((text, index) => {
            return (
              <ChatBubble key={index} entityName={entityName} text={this._generateText(text, entityName)} wait={RENDER_DELAY*index} />
            );
          })}
        </div>
      </div>
    );
  }
}


export default ChatEntitySection;