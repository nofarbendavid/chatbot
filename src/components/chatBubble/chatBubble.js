import React, {Component}          from 'react';
import Loader                      from '../loader/loader';
import {ENTITY_NAME, LOADER_DELAY} from '../../config/constants';
import './style.css';
import Scroll             from 'react-scroll';


class ChatBubble extends Component {

  constructor() {
    super();
    this.scroll = Scroll.animateScroll;
    this.timers = [],
      this.state = {
        showLoader: true,
        shouldWait: true
      };
  }


  _handleTimeout = (stateProp, stateValue, timeToWait) => {
    this.timers.push(setTimeout(() => {
      this.setState({[stateProp]: stateValue});
    }, timeToWait));
  };


  componentDidMount() {
    this._handleTimeout('showLoader', false, this.props.wait + LOADER_DELAY);
    this._handleTimeout('shouldWait', false, this.props.wait);
  }


  componentDidUpdate() {
    this.scroll.scrollToBottom({containerId: 'chat'});
  }

  componentWillUnmount() {
    this.timers.forEach(timer => {
      clearTimeout(timer);
    })
  }


  render() {
    if (!this.state.shouldWait) {
      let entityName = this.props.entityName;
      return (
        <div className={'text-bubble ' + entityName}>
          {
            (this.state.showLoader && entityName === ENTITY_NAME.MAYA) ? <Loader/> : this.props.text
          }
        </div>
      );
    } else {
      return null;
    }
  }

}


export default ChatBubble;