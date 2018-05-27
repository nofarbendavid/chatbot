import React, {Component} from 'react';
import submitIcon         from '../../assets/images/submit_icon.png';
import ReactDOM           from 'react-dom';
import './style.css';

class InputContainer extends Component {

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this._handleSubmit();
    }
  };

  _handleSubmit = () => {
    const userInput = ReactDOM.findDOMNode(this.refs.user_input).value;
    if (userInput !== '') {
      this.props.data && this.props.data.username ? this.props.actions.setUserinput(userInput) : this.props.actions.setUsernameToLocalStorage(userInput);
      ReactDOM.findDOMNode(this.refs.user_input).value = '';
    }
  };

  render() {
    return (
      <div className="input-container">
        <input type="text" ref="user_input" onKeyPress={this._handleKeyPress}/>
        <img src={submitIcon} className="submit-icon" onClick={this._handleSubmit} alt="submit"/>
      </div>
    );
  }

}


export default InputContainer;